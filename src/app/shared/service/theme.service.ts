import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  setTheme() {
    // This can be expanded to apply different themes dynamically
    const root = document.documentElement;

    // Set CSS variables for the theme
    root.style.setProperty('--font-heading', 'Your Heading Font, sans-serif');
    root.style.setProperty('--font-body', 'Your Body Font, sans-serif');
    root.style.setProperty('--border', 'hsl(var(--border))');
    root.style.setProperty('--input', 'hsl(var(--input))');
    root.style.setProperty('--ring', 'hsl(var(--ring))');
    root.style.setProperty('--background', 'hsl(var(--background))');
    root.style.setProperty('--foreground', 'hsl(var(--foreground))');
    root.style.setProperty('--primary', 'hsl(var(--primary))');
    root.style.setProperty('--primary-foreground', 'hsl(var(--primary-foreground))');
    root.style.setProperty('--secondary', 'hsl(var(--secondary))');
    root.style.setProperty('--secondary-foreground', 'hsl(var(--secondary-foreground))');
    root.style.setProperty('--destructive', 'hsl(var(--destructive))');
    root.style.setProperty('--destructive-foreground', 'hsl(var(--destructive-foreground))');
    root.style.setProperty('--muted', 'hsl(var(--muted))');
    root.style.setProperty('--muted-foreground', 'hsl(var(--muted-foreground))');
    root.style.setProperty('--accent', 'hsl(var(--accent))');
    root.style.setProperty('--accent-foreground', 'hsl(var(--accent-foreground))');
    root.style.setProperty('--popover', 'hsl(var(--popover))');
    root.style.setProperty('--popover-foreground', 'hsl(var(--popover-foreground))');
    root.style.setProperty('--card', 'hsl(var(--card))');
    root.style.setProperty('--card-foreground', 'hsl(var(--card-foreground))');
    root.style.setProperty('--radius', '0.5rem');
  }
}
