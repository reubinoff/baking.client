import { vi } from 'vitest';

// Configure path aliases
vi.mock('@/components/ui/toaster', () => {
  return {
    Toaster: () => null,
  };
});

vi.mock('@/pages/home', () => {
  return {
    default: () => null,
  };
});

vi.mock('@/pages/recipe-detail', () => {
  return {
    default: () => null,
  };
});

vi.mock('@/pages/not-found', () => {
  return {
    default: () => null,
  };
}); 