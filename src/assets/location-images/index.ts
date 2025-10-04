// Import all the image assets
import amazonBefore from './amazon-before.png';
import amazonAfter from './amazon-after.png';
import greenlandBefore from './greenland-before.png';
import greenlandAfter from './greenland-after.png';
import aralseaBefore from './aralsea-before.png';
import aralseaAfter from './aralsea-after.png';
import californiaBefore from './california-before.png';
import californiaAfter from './california-after.png';
import dubaiBefore from './dubai-before.png';
import dubaiAfter from './dubai-after.png';
import lakemeadBefore from './lakemead-before.png';
import lakemeadAfter from './lakemead-after.png';
import alaskaBefore from './alaska-before.png';
import alaskaAfter from './alaska-after.png';
import urmiaBefore from './urmia-before.png';
import urmiaAfter from './urmia-after.png';
import vegasBefore from './vegas-before.png';
import vegasAfter from './vegas-after.png';

// This file maps location IDs to their local image assets for use in the UI.
export const locationImages: Record<string, { preview: string; before: string; after: string }> = {
  amazon: {
    // use before image as preview when a dedicated preview isn't present
    preview: amazonBefore,
    before: amazonBefore,
    after: amazonAfter,
  },
  greenland: {
    preview: greenlandBefore,
    before: greenlandBefore,
    after: greenlandAfter,
  },
  'aral-sea': {
    // some files are named "aralsea-*.png" in the folder
    preview: aralseaBefore,
    before: aralseaBefore,
    after: aralseaAfter,
  },
  // Additional locations present in the folder
  california: {
    preview: californiaBefore,
    before: californiaBefore,
    after: californiaAfter,
  },
  dubai: {
    preview: dubaiBefore,
    before: dubaiBefore,
    after: dubaiAfter,
  },
  'lake-mead': {
    preview: lakemeadBefore,
    before: lakemeadBefore,
    after: lakemeadAfter,
  },
  alaska: {
    preview: alaskaBefore,
    before: alaskaBefore,
    after: alaskaAfter,
  },
  "urmia": {
    preview: urmiaBefore,
    before: urmiaBefore,
    after: urmiaAfter,
  },
  vegas: {
    preview: vegasBefore,
    before: vegasBefore,
    after: vegasAfter,
  },
  // Fallbacks for locations that don't have dedicated images yet
  jakarta: {
    preview: dubaiBefore,
    before: dubaiBefore,
    after: dubaiAfter,
  },
  chernobyl: {
    preview: californiaBefore,
    before: californiaBefore,
    after: californiaAfter,
  },
};
