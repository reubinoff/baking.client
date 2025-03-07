import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from '../App';

// Mock the components that App depends on
vi.mock('@/components/ui/toaster', () => ({
  Toaster: () => <div data-testid="mock-toaster"></div>
}));

vi.mock('@/pages/home', () => ({
  default: () => <div data-testid="mock-home">Home Page</div>
}));

vi.mock('@/pages/recipe-detail', () => ({
  default: () => <div data-testid="mock-recipe-detail">Recipe Detail Page</div>
}));

vi.mock('@/pages/not-found', () => ({
  default: () => <div data-testid="mock-not-found">Not Found Page</div>
}));

// Mock the tanstack query client
vi.mock('@tanstack/react-query', () => ({
  QueryClientProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock the queryClient
vi.mock('../lib/queryClient', () => ({
  queryClient: {}
}));

describe('App', () => {
  it('renders without crashing', () => {
    // Arrange & Act
    render(<App />);
    
    // Assert
    // This test passes if the render doesn't throw an error
    expect(document.body).toBeDefined();
  });

  it('contains the main app structure', () => {
    // Arrange & Act
    render(<App />);
    
    // Assert - check for the app's main structure
    const appElement = document.querySelector('.app-background');
    expect(appElement).not.toBeNull();
    
    // Check for the main content area
    const mainElement = document.querySelector('main');
    expect(mainElement).not.toBeNull();
    
    // Check for the toaster component
    const toasterElement = document.querySelector('[data-testid="mock-toaster"]');
    expect(toasterElement).not.toBeNull();
  });
}); 