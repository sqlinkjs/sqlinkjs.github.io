---
sidebar_position: 7
title: Upgrading SQLink
---

import TerminalView from "@site/src/components/terminalview";


# Upgrading SQLink

Keeping SQLink up to date ensures that you benefit from the latest features, performance improvements, and security fixes.  

To upgrade SQLink to the latest version, run the following command in your terminal:

<TerminalView text="sqlink upgrade" />

---

## How It Works

- The `sqlink upgrade` command checks for the latest version of SQLink available on **npm**.  
- If a newer version is found, it will automatically update the globally installed package.  
- Once the upgrade completes, you can verify it by checking the version:

<TerminalView text="sqlink --version" />

---

## Best Practices

- Periodically upgrade to ensure compatibility with the latest **MySQL features** and **REST API enhancements**.  
- After upgrading, review the **release notes** on [GitHub](https://github.com/Santhoshlm10/SQLink) or [npm](https://www.npmjs.com/package/sqlink) to learn about new features and changes.  
