(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{247:function(e,a,t){"use strict";t.r(a);var s=t(17),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"headless-wasabi-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#headless-wasabi-daemon"}},[e._v("#")]),e._v(" Headless Wasabi Daemon")]),e._v(" "),t("p",[e._v("The default of how to interact with your Wasabi wallet is the graphical user interface.\nThere is also a headless daemon where you do not run a resource-intensive GUI, but only the command line interface.\nThis daemon is especially useful for power users mixing bitcoin in the backend of their servers.")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#available-commands"}},[e._v("Available Commands")])]),t("li",[t("a",{attrs:{href:"#usage"}},[e._v("Usage")]),t("ul",[t("li",[t("a",{attrs:{href:"#if-the-package-is-installed"}},[e._v("If the package is installed")])]),t("li",[t("a",{attrs:{href:"#if-building-from-source-code"}},[e._v("If building from source code")])])])])])]),t("p"),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"available-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#available-commands"}},[e._v("#")]),e._v(" Available Commands")]),e._v(" "),t("p",[t("code",[e._v("wassabee")]),e._v(" or "),t("code",[e._v("wassabeed")]),e._v(" starts Wasabi wallet when the package is installed.")]),e._v(" "),t("p",[t("code",[e._v("mix")]),e._v(" makes sure Wasabi starts in daemon and not the GUI.")]),e._v(" "),t("p",[t("code",[e._v("--wallet:")]),e._v(" specifies the name of the hot wallet with the coins you want to CoinJoin.")]),e._v(" "),t("p",[t("code",[e._v("--destination:")]),e._v(" specifies the destination wallet that the mixed coins will be coinjoined into, after the target anonymity set is reached.\nA coin will be coinjoined into the first wallet until anonymity set target is reached, then there will be one additional CoinJoin into the "),t("code",[e._v("destination")]),e._v(" wallet.")]),e._v(" "),t("p",[t("code",[e._v("--keepalive")]),e._v(" keeps the daemon running after all coins have reached the anonymity set target, and continue to CoinJoin when new coins are received into the wallet.")]),e._v(" "),t("p",[t("code",[e._v("--help")]),e._v(" displays help page and exit.")]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("h3",{attrs:{id:"if-the-package-is-installed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-the-package-is-installed"}},[e._v("#")]),e._v(" If the package is installed")]),e._v(" "),t("p",[e._v("Depending on your operation system, open the command line and execute:")]),e._v(" "),t("h4",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("wassabee mix --wallet:MyFirstWallet --destination:MySecondWallet --keepalive\n")])])]),t("h4",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /Applications/Wasabi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(" Wallet.app/Contents/MacOs\n./wassabee mix --wallet:MyFirstWallet --destination:MySecondWallet --keepalive\n")])])]),t("h4",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Program Files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("WasabiWallet\nwassabeed.exe mix --wallet:MyFirstWallet --destination:MySecondWallet --keepalive\n")])])]),t("h3",{attrs:{id:"if-building-from-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-building-from-source-code"}},[e._v("#")]),e._v(" If building from source code")]),e._v(" "),t("p",[e._v("Open the terminal, navigate to the "),t("code",[e._v("WalletWasabi.Gui")]),e._v(" folder inside the cloned repository and execute:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("dotnet run -- mix --wallet:MyFirstWallet --destination:MySecondWallet --keepalive\n")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);