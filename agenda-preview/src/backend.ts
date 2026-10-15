import {createClient} from '@supabase/supabase-js';
const url=import.meta.env.VITE_SUPABASE_URL;
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const supabase=url&&key?createClient(url,key):null;
async function requireMfa(){if(!supabase)throw Error('Login indisponível.');const r=await supabase.auth.mfa.getAuthenticatorAssuranceLevel();if(r.error||r.data.currentLevel!=='aal2')throw Error('Verifique o código de dois fatores para continuar.');}
export async function readBookings(admin:boolean){
 if(admin)await requireMfa();
 if(!supabase)throw Error('A agenda está em configuração. Disponibilidade ainda não publicada.');
 const result=admin?await supabase.from('agenda_bookings').select('*').order('start'):await supabase.rpc('agenda_availability');
 if(result.error)throw result.error;return result.data||[];
}
export async function writeBooking(form:any){
 await requireMfa();
 if(!supabase)throw Error('Banco de dados ainda não conectado.');
 const payload={cabin:form.cabin,start:form.start,end:form.end,guest:form.guest.trim(),phone:form.phone||'',notes:form.notes||'',status:form.status};
 const r=form.id?await supabase.from('agenda_bookings').update(payload).eq('id',form.id).select('id'):await supabase.from('agenda_bookings').insert(payload).select('id');
 if(r.error)throw Error(r.error.code==='23P01'?'Essas noites já estão reservadas ou bloqueadas.':r.error.message);
 if(!r.data?.length)throw Error('Alteração não autorizada.');
}
export async function deleteBooking(id:string){
 await requireMfa();
 if(!supabase)throw Error('Banco de dados ainda não conectado.');
 const r=await supabase.from('agenda_bookings').delete().eq('id',id).select('id');
 if(r.error)throw r.error;if(!r.data?.length)throw Error('Alteração não autorizada.');
}
