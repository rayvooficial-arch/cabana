import {useState,useEffect,useRef} from 'react';
import {supabase} from './backend';
import Agenda from './Agenda';
type Stage='loading'|'login'|'enroll'|'challenge'|'ready';
export default function App(){
 const admin=location.pathname==='/admin';
 const [stage,setStage]=useState<Stage>(admin?'loading':'ready');
 const [email,setEmail]=useState(''),[password,setPassword]=useState(''),[error,setError]=useState(''),[busy,setBusy]=useState(false);
 const [factorId,setFactorId]=useState(''),[factors,setFactors]=useState<any[]>([]),[qr,setQr]=useState(''),[secret,setSecret]=useState(''),[code,setCode]=useState('');
 const serial=useRef(0),alive=useRef(true);
 async function verify(){
  if(!supabase)return setStage('login');
  const sequence=++serial.current;
  try{
   const user=await supabase.auth.getUser();
   if(!alive.current||sequence!==serial.current)return;
   if(user.error||!user.data.user){setQr('');setSecret('');setCode('');setStage('login');return;}
   const membership=await supabase.rpc('agenda_is_admin');
   if(membership.error||membership.data!==true)throw Error('Esta conta não possui acesso administrativo.');
   const assurance=await supabase.auth.mfa.getAuthenticatorAssuranceLevel();if(assurance.error)throw assurance.error;
   const list=await supabase.auth.mfa.listFactors();if(list.error)throw list.error;
   if(!alive.current||sequence!==serial.current)return;
   const verified=list.data.totp.filter(f=>f.status==='verified');setFactors(verified);
   if(assurance.data.currentLevel==='aal2'&&verified.length){setQr('');setSecret('');setCode('');setStage('ready');}
   else if(verified.length){setFactorId(verified[0].id);setStage('challenge');}
   else setStage('enroll');
  }catch(e:any){if(alive.current&&sequence===serial.current){setError(e.message||'Não foi possível verificar seu acesso.');setStage('login');}}
 }
 useEffect(()=>{alive.current=true;if(!admin)return;
  verify();const subscription=supabase?.auth.onAuthStateChange(()=>{setTimeout(()=>{if(alive.current)verify()},0)}).data.subscription;
  return()=>{alive.current=false;serial.current++;subscription?.unsubscribe();};
 },[]);
 useEffect(()=>{if(!admin||stage==='login'||stage==='loading')return;
  let lastActivity=Date.now();const activity=()=>{lastActivity=Date.now()};
  window.addEventListener('pointerdown',activity);window.addEventListener('keydown',activity);
  const timer=setInterval(()=>{if(Date.now()-lastActivity>30*60*1000){setError('Sua sessão foi encerrada após 30 minutos sem atividade.');logout()}},15000);
  return()=>{clearInterval(timer);window.removeEventListener('pointerdown',activity);window.removeEventListener('keydown',activity)};
 },[stage,admin]);
 async function logout(){serial.current++;setQr('');setSecret('');setCode('');setPassword('');setStage('login');await supabase?.auth.signOut({scope:'local'});}
 async function login(e:any){e.preventDefault();if(!supabase)return;setBusy(true);setError('');try{
  const result=await supabase.auth.signInWithPassword({email:email.trim(),password});setPassword('');
  if(result.error)throw Error('Não foi possível entrar. Confira o e-mail e a senha.');await verify();
 }catch(e:any){setError(e.message)}finally{setBusy(false)}}
 async function enroll(){if(!supabase)return;setBusy(true);setError('');try{
  const list=await supabase.auth.mfa.listFactors();if(list.error)throw list.error;
  for(const factor of list.data.all){if(factor.status==='unverified'&&factor.friendly_name==='Agenda Cabana das Mansões'){const removed=await supabase.auth.mfa.unenroll({factorId:factor.id});if(removed.error)throw removed.error;}}
  const result=await supabase.auth.mfa.enroll({factorType:'totp',friendlyName:'Agenda Cabana das Mansões',issuer:'Cabana das Mansões'});
  if(result.error)throw result.error;setFactorId(result.data.id);
  const svg=result.data.totp.qr_code;setQr(svg.startsWith('data:')?svg:'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg));setSecret(result.data.totp.secret);setCode('');
 }catch(e:any){setError(e.message||'Não foi possível gerar o QR code.')}finally{setBusy(false)}}
 async function confirmCode(e:any){e.preventDefault();if(!supabase||!factorId||!/^\d{6}$/.test(code))return;setBusy(true);setError('');try{
  const challenge=await supabase.auth.mfa.challenge({factorId});if(challenge.error)throw challenge.error;
  const result=await supabase.auth.mfa.verify({factorId,challengeId:challenge.data.id,code});
  if(result.error)throw Error('Código inválido ou expirado. Digite o código atual do autenticador.');
  setCode('');setQr('');setSecret('');await verify();
 }catch(e:any){setCode('');setError(e.message||'Não foi possível validar o código.')}finally{setBusy(false)}}
 if(admin&&stage!=='ready')return <main><header><a className="brand" href="/">Cabana das Mansões</a><a href="/">Ver agenda pública</a></header><section className="auth-card"><p className="eyebrow">ACESSO RESTRITO</p><h1>{stage==='login'?'Administração':stage==='loading'?'Verificando acesso':'Autenticação de dois fatores'}</h1>
 {stage==='loading'?<p>Verificando sua sessão…</p>:!supabase?<p>Login indisponível. Tente novamente mais tarde.</p>:stage==='login'?<form onSubmit={login}>
 <label>E-mail<input type="email" required autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)}/></label>
 <label>Senha<input type="password" required autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)}/></label>
 <button disabled={busy}>{busy?'Entrando…':'Continuar'}</button><p>Após a senha, será solicitado o código do seu autenticador.</p></form>:<>
 {stage==='enroll'&&<><p>Configure seu autenticador para proteger as reservas. Você pode usar Google Authenticator, Microsoft Authenticator ou outro aplicativo compatível.</p>
 {!qr?<button disabled={busy} onClick={enroll}>{busy?'Preparando…':'Configurar autenticador'}</button>:<><img className="mfa-qr" src={qr} alt="QR code pessoal para configurar o autenticador"/><p>Escaneie o QR code no aplicativo e digite o código de seis números.</p><details><summary>Não consigo escanear</summary><p>Adicione uma chave de configuração no autenticador:</p><code className="mfa-secret">{secret}</code></details><p>Guarde o acesso ao autenticador com segurança. Não compartilhe o QR code ou a chave. Se perder o aparelho, a recuperação precisará ser feita pelo responsável pelo projeto.</p></>}</>}
 {(stage==='challenge'||qr)&&<form onSubmit={confirmCode}>{stage==='challenge'&&<p>Digite o código atual do aplicativo autenticador.</p>}{stage==='challenge'&&factors.length>1&&<label>Autenticador<select value={factorId} onChange={e=>setFactorId(e.target.value)}>{factors.map((f,i)=><option key={f.id} value={f.id}>{f.friendly_name||'Autenticador '+(i+1)}</option>)}</select></label>}
 <label>Código de verificação<input type="text" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" minLength={6} maxLength={6} value={code} onChange={e=>setCode(e.target.value.replace(/\D/g,''))} required/></label><button disabled={busy}>{busy?'Verificando…':stage==='enroll'?'Ativar e entrar':'Verificar e entrar'}</button></form>}
 <button disabled={busy} className="outline" onClick={logout}>Sair</button></>}
 {error&&<p role="alert" className="error">{error}</p>}</section></main>;
 return <>{admin&&<div className="session-bar"><span>Conta protegida com dois fatores · </span><button onClick={logout}>Sair da administração</button></div>}<Agenda/></>;
}
