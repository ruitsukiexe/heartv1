>

# DEPLOY IN TERMUX/UBUNTU

```
pkg upgrade -y && pkg update -y && pkg install nodejs -y && pkg install nodejs-lts -y && pkg install ffmpeg -y && pkg install wget -y && pkg install git -y
```
**ATENÇÃO:**
Será necessário digitar y toda vez que pedir a caixa [y/n]
---------------------------

**2° Comando**
```
termux-setup-storage
```
**3° Comando**
```
cd /sdcard/Download/heartv1
```
**4° Comando**
```
node main.js
```
