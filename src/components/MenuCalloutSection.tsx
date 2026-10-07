'use client';
import React from 'react';
import { DichSlider } from './dich-slider/DichSlider';

interface MenuCalloutSectionProps {
  onOpenMenus: (categoryId?: string) => void;
  lang: 'en' | 'fr';
}

export const MenuCalloutSection: React.FC<MenuCalloutSectionProps> = ({
  onOpenMenus,
  lang
}) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <DichSlider />
    </section>
  );
};

