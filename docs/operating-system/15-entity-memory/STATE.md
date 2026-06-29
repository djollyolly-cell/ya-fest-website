# Entity Memory State

## Implemented

Entity source materials exist as markdown documents.

The normalized Ya-Fest entity registry now exists at
`yafest-entity-registry.md`. It covers product records, person records,
proof-asset classes, source priority, and conflict notes for the current
`https://yafest.ru` static production surface.

For Phase 4 and Phase 5, the accepted source rule is now explicit: production-site prices, dates, and conditions are current; site photos and project photo folders are official visual materials; accessible reviews and topical VK posts/albums may be analyzed as proof material with source references.

Working inventories used to build the registry:

- `product-facts-inventory.md`
- `teacher-proof-inventory.md`

## Skeleton or foundation

- Operating documentation files for this area now exist.
- Contracts and flows are documented at an initial level and should be deepened when future entity fields, schema rules, or VK-proof classification rules are added.

## Not implemented or not verified

- Event-specific VK album/post URLs are not inventoried yet.
- Photo-only people remain pending until a text source confirms name, role, and related program.
- Any future feature described in roadmap or source documents remains unimplemented until code/files/checks prove otherwise.

## Risks and compatibility notes

- Source/evidence documents may be older than code or active deployment state.
- React and static HTML surfaces may diverge if facts are updated in only one place.
- Area status must be updated after meaningful implementation, review, deploy, or docs pass.
- Registry conflicts are explicit by design; unresolved names and credentials must not be silently normalized in public pages.
