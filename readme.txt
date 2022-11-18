Předmět XKOSB
Autor: Radovan Němec
OS: P22015
Korespondenční úkol č.3


WEBOVÉ APLIKACE PRO ŠIFROVÁNÍ ZA POMOCI AES

Obsah souborů v zip souboru
- všechny soubory obsaženy v ZIP souboru je nutné extrahovat do jedné složky. 
- spuštění aplikace se provede přes index.html nebo decode.html, aplikace se spustí v prohlížeči (není odskoučene na IOs). 
- ke spuštění aplikace nejsou zapotřebí žádné další věci 

V aplikaci jsou 2 záložky:
	1. ŠIFROVÁNÍ obsahuje: 
            a) vyber mezi psani textové zprávy nebo nahrání souboru,
            b) zadaní šifrovacího klíče,
            c) výběr šifrovací metody - podle zvolené metody se otevirájí další nastavení
            d) vyběr normy paddingu
            e) zvolení bitového klíč 128/192/256 bit
            f) zvolení iterace (počet šifrovacího opakovaní)

	2. DEŠIFROVÁNÍ obrahuje stejné funkce jako založka ŠIFROVÁNÍ jen z rozdílem že se zprávy dešifrují.
            !!! Proto je potřebné si zapamatovat přesné nastavení šifrovací zprávy, při špatním nastavení u některách modu zahlasí chybu. 


a)	Složka CSS
    i)	Soubor style.css 
        -	Tento soubor slouží pouze pro grafickou úpravu webové stránky


b)	Složka JS
    i)	Soubor CryptoJS.js
        -	tento soubor slouží jako knihovna pro inicializační vektor a náhodne generovanú hodnot

    ii)	Soubor encode.js
    iii) Soubor decode.js
        - oba dva osoubory obsahují stené funkce jen seliší v že encode má funci pro šifrování zprávy a decode pro rozšifrování zprávy. Tato

    Encode a Decode obsahuje tyto funkce:
    -	reset - restartovácí funkce pro tláčítko download,
    -	loadContent - funkce pro načtení obsahu,
    -	changeCiphersPBKDF2 - funkce pro možnost zvolení bitového klíče,
    -	onChangeEncryptionMethod - funkce pro výběr metody a otevření jednotlivých nastavení,
    -	changeInputType - funkce pro zaměny mezi textem a souborem,
    -	desktopViewEncrypt - funcke pro ošetření zadaní textu, hesla a souboru,
    -	myGreeting - funkce která načte data (typ vstupu, zpráva, heslo),
    -	_Ciphers - šifrovací/dešifrovací funkce která se nastaví podle zveléného nastavení,
    -	downloadDecryptedFile - funkce pro stažení dešifrovaného souboru a jeho zpravné zobrazení,
    -   getFileName - funkce pro název souboru, 
    -   onSelectFile - funkce pro výber a nahraní souboru,
    -   copyText123 - funkce která nakopíruje šifrováný/dešifrováný text po kliknuti do textového pole.


c)	index.html 
    - obsah stránky pro šifrování,

d)	decode.html
    - obsah stránky pro dešifrování.

Soubory C a D jsou spustitelné soubory pro start aplikace ve webovém prohlížeči
Webová aplikace po spuštění obsahuje jednotlivé kroky pro její prácí. 





