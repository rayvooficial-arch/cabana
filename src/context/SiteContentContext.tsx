import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { accommodations as defaultAccommodations } from '../data/accommodations';
import {
  EXPERIENCES_AND_BASKETS,
  ExperienceAddon,
  SEASONAL_RATES,
  SPECIAL_PACKAGES,
  SpecialPackage,
  STAY_MODES,
  StayMode,
} from '../data/commercial';
import { DEFAULT_EXPERIENCE_GALLERIES, ExperienceGallery } from '../data/experienceGalleries';
import { DEFAULT_FAQS, FaqItem } from '../data/faqs';
import { Accommodation } from '../types';
import { loadPublishedContent } from '../lib/siteBackend';

export interface SiteContent {
  accommodations: Accommodation[];
  stayModes: Record<'express' | 'conforto', StayMode>;
  experiencesAndBaskets: ExperienceAddon[];
  seasonalRates: typeof SEASONAL_RATES;
  specialPackages: SpecialPackage[];
  experienceGalleries: ExperienceGallery[];
  faqs: FaqItem[];
}

export const DEFAULT_SITE_CONTENT: SiteContent = {
  accommodations: defaultAccommodations,
  stayModes: STAY_MODES,
  experiencesAndBaskets: EXPERIENCES_AND_BASKETS,
  seasonalRates: SEASONAL_RATES,
  specialPackages: SPECIAL_PACKAGES,
  experienceGalleries: DEFAULT_EXPERIENCE_GALLERIES,
  faqs: DEFAULT_FAQS,
};

function mergeContent(content: Partial<SiteContent> | null): SiteContent {
  if (!content) return DEFAULT_SITE_CONTENT;
  const publishedAddOns = content.experiencesAndBaskets || [];
  const publishedAddOnIds = new Set(publishedAddOns.map((item) => item.id));
  const missingDefaultAddOns = DEFAULT_SITE_CONTENT.experiencesAndBaskets.filter(
    (item) => !publishedAddOnIds.has(item.id),
  );

  return {
    accommodations: content.accommodations?.length ? content.accommodations : DEFAULT_SITE_CONTENT.accommodations,
    stayModes: content.stayModes?.express && content.stayModes?.conforto ? content.stayModes : DEFAULT_SITE_CONTENT.stayModes,
    experiencesAndBaskets: publishedAddOns.length
      ? [...publishedAddOns, ...missingDefaultAddOns]
      : DEFAULT_SITE_CONTENT.experiencesAndBaskets,
    seasonalRates: content.seasonalRates?.rates ? content.seasonalRates : DEFAULT_SITE_CONTENT.seasonalRates,
    specialPackages: content.specialPackages?.length ? content.specialPackages : DEFAULT_SITE_CONTENT.specialPackages,
    experienceGalleries: content.experienceGalleries?.length ? content.experienceGalleries : DEFAULT_SITE_CONTENT.experienceGalleries,
    faqs: content.faqs?.length ? content.faqs : DEFAULT_SITE_CONTENT.faqs,
  };
}

interface SiteContentContextValue {
  content: SiteContent;
  loading: boolean;
  refresh: () => Promise<void>;
}

const SiteContentContext = createContext<SiteContentContextValue>({
  content: DEFAULT_SITE_CONTENT,
  loading: false,
  refresh: async () => undefined,
});

export const SiteContentProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [content, setContent] = useState(DEFAULT_SITE_CONTENT);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try {
      const published = await loadPublishedContent<Partial<SiteContent>>();
      setContent(mergeContent(published));
    } catch {
      setContent(DEFAULT_SITE_CONTENT);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void refresh(); }, []);

  const value = useMemo(() => ({ content, loading, refresh }), [content, loading]);
  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
};

export const useSiteContent = () => useContext(SiteContentContext);

