---
sidebar_position: 3
---

# %suppAdd

_Created by [**Emily Johnson**](mailto:emily.johnson@emanatebiostats.com?subject=User%20Guide:%20suppAdd)_

#### ✅ QC Version: %qc_suppAdd

_Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20qc_suppAdd)_

## Description

**suppAdd** merges the transposed supplemental dataset to its parent domain.

## Defintion

```sas
%macro suppAdd(domain);
```

## Required Parameters

### _domain_

Parent domain name

## Optional Parameters

None

## Examples

1.

```sas
%suppAdd(dm);
```

2.

```sas
%qc_suppAdd(vs);
```
