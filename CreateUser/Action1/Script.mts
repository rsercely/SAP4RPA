SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SAPGuiOKCode("OKCode").Set "SU01"
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SendKey ENTER
SAPGuiSession("Session").SAPGuiWindow("User Maintenance: Initial").SAPGuiEdit("User").Set  "NEWUSER1"
SAPGuiSession("Session").SAPGuiWindow("User Maintenance: Initial").SAPGuiButton("Create   (F8)").Click
SAPGuiSession("Session").SAPGuiWindow("Maintain Users").SAPGuiEdit("Last name").Set "BartSimpson"
SAPGuiSession("Session").SAPGuiWindow("Maintain Users").SAPGuiTabStrip("TABSTRIP1").Select "Logon Data"
SAPGuiSession("Session").SAPGuiWindow("Maintain Users").SAPGuiEdit("New Password").SetSecure "*******"
SAPGuiSession("Session").SAPGuiWindow("Maintain Users").SAPGuiEdit("Repeat Password").SetSecure "*******"
SAPGuiSession("Session").SAPGuiWindow("Maintain Users").SendKey ENTER
SAPGuiSession("Session").SAPGuiWindow("Maintain Users").SAPGuiButton("Enter").Click
SAPGuiSession("Session").SAPGuiWindow("Maintain Users").SAPGuiButton("Save   (Ctrl+S)").Click
SAPGuiSession("Session").SAPGuiWindow("User Maintenance: Initial").SAPGuiStatusBar("StatusBar").Sync
SAPGuiSession("Session").SAPGuiWindow("User Maintenance: Initial").SAPGuiStatusBar("StatusBar").Check CheckPoint("StatusBar")
SAPGuiSession("Session").SAPGuiWindow("User Maintenance: Initial").SAPGuiMenubar("mbar").Select "System;Log Off"
SAPGuiSession("Session").SAPGuiWindow("Log Off").SAPGuiButton("Yes").Click

