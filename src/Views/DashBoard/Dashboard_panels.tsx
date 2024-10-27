export const Returning_panels = (panel: string) => {
    if (panel === 'profile') return <h1>Hello, this is the Profile panel</h1>;
    if (panel === 'settings') return <h1>Hello, this is the Settings panel</h1>;
    
    return <h1>Panel not found</h1>; // Default message for unmatched panel names
  };
  