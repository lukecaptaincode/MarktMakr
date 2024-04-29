# MarktMakr
## Generator system

## Created System Components

### Store UI

### Store management UI

### Inventory management System

### Brand UI / Dataplatform

### API

## Created System interaction flow
```mermaid
graph TD
    A[API]
    B[Shared inventory system]
    C[Store UI]
    D[Merchant UI / Storefront]
    E[Datastore]
    F[Data platform]
    G[Seller]
    H[Buyer]
    I[Brand]
    G --> D
    D --> A
    G --> B
    B --> A
    A --> E
    H --> C
    C --> A
    I --> F
    F --> A
```
