import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('App Startup', () => {
  it('verifies that the test environment is working', () => {
    // Create a simple component
    const TestComponent = () => <div data-testid="test-component">Test Component</div>;
    
    // Render the component
    const { getByTestId } = render(<TestComponent />);
    
    // Assert that the component is rendered
    expect(getByTestId('test-component')).toBeDefined();
    expect(getByTestId('test-component').textContent).toBe('Test Component');
  });
}); 