---
sidebar_position: 3
---

# %suppAdd

Created by [**Emily Johnson**](mailto:emily.johnson@emanatebiostats.com?subject=User%20Guide:%20suppAdd)

#### ✅ QC Version: %qc_suppAdd

Created by [**Jonathan Amato**](mailto:jonathan.amato@emanatebiostats.com?subject=User%20Guide:%20qc_suppAdd)

## Description

**suppAdd** merges the transposed supplemental dataset to its parent domain.

## Syntax

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
