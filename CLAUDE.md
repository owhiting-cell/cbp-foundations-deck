# Project Guidelines

## Slide Management

Slides live in `src/slides/` as `SlideNN.jsx` (zero-padded, e.g. `Slide01.jsx`).
They are registered in `src/App.jsx` — one import per slide, and listed in the `slides` array in order.

### When adding or deleting a slide

Always keep slide filenames in sequential order with no gaps:

1. **Delete**: Remove the file, remove its import and entry from the `slides` array in `App.jsx`.
2. **Add**: Create the file with the next available number, add its import and append it to `slides` in `App.jsx`.
3. **After either operation**: Rename all subsequent slide files so numbering is continuous (e.g. if Slide09 is deleted, rename Slide10→Slide09, Slide11→Slide10, etc.), then update all affected imports and the `slides` array in `App.jsx` to match.

There should never be a gap in slide numbering.
