var fileData = "";
var fileUpload = false;
var filename = "";
var encryptedData = "";

// funkce pro restartovani zobrazeni buttonu pro stahovani souboru
function reset() {
    document.getElementById( "isReadyId" ).style.display = "none"
}

// funkce pro zobrazeni loaderu  v aplikaci
function loadContent() {
    document.getElementById( "shareId" ).style.display = "none";
    document.getElementById( "loaderId" ).style.display = "none";
    document.getElementById( "inputTypeMessageId" ).style.display = "block";
    document.getElementById( "inputTypeFileId" ).style.display = "none";
    document.getElementById( "ciphersPBKDF2YesId" ).style.display = "none";
    filename = "";
    reset()
}

// funkce pro zapnuti a zaznamenani hodnoty pro rozsireni sifrovaciho klice podle bitove velikosti v aplikaci
function changeCiphersPBKDF2() {
    reset();
    var valuesPbkdf2 = document.getElementById( "ciphersPBKDF2Id" ).value;
    document.getElementById( "bitId" ).value = 128;
    document.getElementById( "ciphersIterationsId" ).value = 0;
    if ( valuesPbkdf2 === 'Yes' ) {
        document.getElementById( "ciphersPBKDF2YesId" ).style.display = "block"
    } else {
        document.getElementById( "ciphersPBKDF2YesId" ).style.display = "none"
    }
}

// funkce pro vyber metod a zobrazeni jejich podfunkci
function onChangeEncryptionMethod() {
    reset();
    var typeMethod = document.getElementById( "encryptionMethodId" ).value;
    document.getElementById( "ciphersPBKDF2Id" ).value = 'No';
    document.getElementById( "bitId" ).value = 128;
    document.getElementById( "paddingId" ).value = '';
    document.getElementById( "ciphersPBKDF2Id" ).value = 'No';
    document.getElementById( "ciphersIterationsId" ).value = 0;
    if ( typeMethod === 'DES' || typeMethod === 'TripleDES' || typeMethod === 'Rabbit' || typeMethod === 'RC4' || typeMethod === 'RC4Drop' ) {
        document.getElementById( "paddingAndciphersPBKDF2Id" ).style.display = "none";
        document.getElementById( "ciphersPBKDF2YesId" ).style.display = "none"
    } else {
        document.getElementById( "paddingAndciphersPBKDF2Id" ).style.display = "block";
        document.getElementById( "ciphersPBKDF2YesId" ).style.display = "block"
    };
    changeCiphersPBKDF2()
}

// funkce pro zmenu textoveho pole a vyberem souboru
function changeInputType() {
    reset();
    var inputType = document.getElementById( "inputTypeId" ).value;
    if ( inputType === 'Message' ) {
        document.getElementById( "inputTypeFileId" ).style.display = "none";
        document.getElementById( "inputTypeMessageId" ).style.display = "block";
        document.getElementById( "enctStrblockId" ).style.display = "block"
    } else {
        document.getElementById( "inputTypeFileId" ).style.display = "block";
        document.getElementById( "inputTypeMessageId" ).style.display = "none";
        document.getElementById( "enctStrblockId" ).style.display = "none"
    }
}

// funkce pro osetreni textove zpravy a nebo nahrani soubor
function desktopViewEncrypt() {
    reset();
    var cripher = "";
    var inputType = document.getElementById( "inputTypeId" ).value;
    var message = document.getElementById( "messageId" ).value;
    var password = document.getElementById( "passwordId" ).value;
    cripher = "";
    if ( inputType === 'Message' && ( message === undefined || message === '' || message.trim() === ''
    ) ) {
        alert( "Prosím zadejte zprávu k dešifrování...." );
        return
    } else {
        if ( inputType === File && fileUpload === false ) {
            alert( "Prosím nahrejte soubor...." );
            return
        }
    };
    if ( password === undefined || password === '' || password.trim() === '' ) {
        alert( "Prosím zadejte heslo...." );
        return
    };
    document.getElementById( "loaderId2" ).style.display = "block";
    setTimeout( myGreeting, 2000 )
}

// funkce pro zaznamenani vstupnich hodnot (zpusob vlozeni zpravy, zprava, klic ....)
function myGreeting() {
    var cripher = "";
    var inputType = document.getElementById( "inputTypeId" ).value;
    var message = document.getElementById( "messageId" ).value;
    var password = document.getElementById( "passwordId" ).value;
    var typeMethod = document.getElementById( "encryptionMethodId" ).value;
    var PBKDF2 = document.getElementById( "ciphersPBKDF2Id" ).value;
    var bite = document.getElementById( "bitId" ).value;
    var iterace = document.getElementById( "ciphersIterationsId" ).value;
    var paddingNorm = document.getElementById( "paddingId" ).value;
    _Ciphers( message, password, inputType, cripher, typeMethod, PBKDF2, bite, iterace, paddingNorm );
   // console.log( "Metoda:", typeMethod, " PBKDF2:", PBKDF2, " Bit:", bite, " iterace:", iterace );
}

// funkce pro sifrovani do které vstupuji vsechny potrebne promenne
function _Ciphers( message, password, inputType, cripher, typeMethod, PBKDF2, bite, iterace, paddingNorm ) {
    encryptedData = "";
    // jestli je vstu nastaveny na soubor nastavi cteni zpravy ze seuboru
    try {
        if ( inputType === 'File' ) {
            message = fileData
            console.log( "fileData: ", message );
        };
        // jednotlive sifrovaci/desifrovani metody a jejich sifrovani
        if ( typeMethod === 'DES' ) {
            cripher = CryptoJS.DES.encrypt( message, password );
            cripher = cripher.toString()
        } else {
            if ( typeMethod === 'TripleDES' ) {
                cripher = CryptoJS.TripleDES.encrypt( message, password );
                cripher = cripher.toString()
            } else {
                if ( typeMethod === 'Rabbit' ) {
                    cripher = CryptoJS.Rabbit.encrypt( message, password );
                    cripher = cripher.toString()
                } else {
                    if ( typeMethod === 'RC4' ) {
                        cripher = CryptoJS.RC4.encrypt( message, password );
                        cripher = cripher.toString()
                    } else {
                        if ( typeMethod === 'RC4Drop' ) {
                            cripher = CryptoJS.RC4Drop.encrypt( message, password );
                            cripher = cripher.toString()
                        } else {
                            let mode = null;
                            if ( typeMethod === 'CBC' ) {
                                mode = CryptoJS.mode.CBC
                            } else {
                                if ( typeMethod === 'ECB' ) {
                                    mode = CryptoJS.mode.ECB
                                } else {
                                    if ( typeMethod === 'CFB' ) {
                                        mode = CryptoJS.mode.CFB
                                    } else {
                                        if ( typeMethod === 'CTR' ) {
                                            mode = CryptoJS.mode.CTR
                                        } else {
                                            if ( typeMethod === 'OFB' ) {
                                                mode = CryptoJS.mode.OFB
                                            }
                                        }
                                    }
                                }
                            };
                            // sifrovani paddingu
                            if ( paddingNorm === 'Pkcs7' ) {
                                paddingNorm = CryptoJS.pad.Pkcs7
                            } else {
                                if ( paddingNorm === 'Iso97971' ) {
                                    paddingNorm = CryptoJS.pad.Iso97971
                                } else {
                                    if ( paddingNorm === 'AnsiX923' ) {
                                        paddingNorm = CryptoJS.pad.AnsiX923
                                    } else {
                                        if ( paddingNorm === 'Iso10126' ) {
                                            paddingNorm = CryptoJS.pad.Iso10126
                                        } else {
                                            if ( paddingNorm === 'ZeroPadding' ) {
                                                paddingNorm = CryptoJS.pad.ZeroPadding
                                            } else {
                                                if ( paddingNorm === 'NoPadding' ) {
                                                    paddingNorm = CryptoJS.pad.NoPadding
                                                } else {
                                                    paddingNorm = ''
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                           // zvolena velikost bitu jestli byla povolena
                            if ( PBKDF2 === 'Yes' ) {
                                let biteSize = 0;
                                if ( bite == 128 ) {
                                    biteSize = 128 / 32
                                } else {
                                    if ( bite == 192 ) {
                                        biteSize = 192 / 32
                                    } else {
                                        if ( bite == 256 ) {
                                            biteSize = 256 / 32
                                        }
                                    }
                                };

                                // encrypt
                                let iv = CryptoJS.lib.WordArray.random( 128 / 8 );
                                let salt = CryptoJS.lib.WordArray.random( 128 / 8 );
                                let key = '';
                                if ( iterace > 0 ) {
                                    key = CryptoJS.PBKDF2( password, salt, {
                                        keySize: biteSize,
                                        iterations: iterace
                                    } )
                                } else {
                                    key = CryptoJS.PBKDF2( password, salt, {
                                        keySize: biteSize
                                    } )
                                };
                                let padd = null;
                                if ( paddingNorm === '' ) {
                                    padd = CryptoJS.AES.encrypt( message, key, {
                                        iv: iv,
                                        mode: mode
                                    } )
                                } else {
                                    padd = CryptoJS.AES.encrypt( message, key, {
                                        iv: iv,
                                        mode: mode,
                                        padding: paddingNorm
                                    } )
                                };
                                cripher = salt.toString() + iv.toString() + padd.toString()
                            } else {
                                if ( paddingNorm === '' ) {
                                    cripher = CryptoJS.AES.encrypt( message, password, {
                                        mode: mode
                                    } )
                                } else {
                                    cripher = CryptoJS.AES.encrypt( message, password, {
                                        mode: mode,
                                        padding: paddingNorm
                                    } )
                                }
                            }
                        }
                    }
                }
            }
        }
        // vypis do textoveho pole 
        encryptedData = cripher + "";
        console.log( encryptedData );
        if ( inputType === 'Message' ) {
            document.getElementById( 'encryptedStringId' ).value = encryptedData;
            //console.log( "Encrypted: ",encryptedData );
        };
        document.getElementById( 'isReadyId' ).style.display = 'block';
        document.getElementById( 'loaderId2' ).style.display = 'none'
    } catch ( error ) {
        document.getElementById( 'encryptedStringId' ).value = "";
        document.getElementById( 'isReadyId' ).style.display = 'none';
        document.getElementById( 'loaderId2' ).style.display = 'none'
    }
}

// funkce pro stazeni zasifrovaneho textu z textoveho pole do souboru 
function downloadFile() {
    var aTag = document.createElement( "a" );
    aTag.setAttribute( 'href', 'data: text / plain; charset = utf - 8,' + encryptedData );
    console.log( getFileName() );
    aTag.setAttribute( 'download', getFileName() + '.txt' );
    console.log( getFileName() );
    aTag.click()
}

// funkce pro vraceni textoveho nazvu souboru - ok
function getFileName() {
    var inputType = document.getElementById( "inputTypeId" ).value;
    if ( inputType === 'File' && filename !== null && filename !== '' && filename !== undefined && filename.length > 0 ) {
        return filename.substring( 0, filename.lastIndexOf( '.' ) )
    } else {
        return "EncryptedData"
    }
}

// funkce pro vyber a nahrani souboru
function onSelectFile( fileObject ) {
    try {
        fileData = null;
        document.getElementById( "loaderId" ).style.display = "block";
        if ( fileObject.target.files && fileObject.target.files[ 0 ] ) {
            filename = fileObject.target.files[ 0 ].name;
            var writer = new FileReader();
            console.log( writer );
            writer.readAsDataURL( fileObject.target.files[ 0 ] );
            writer.onload = ( fileObject ) => {
                fileData = fileObject.target.result.toString();
                fileUpload = true;
                document.getElementById( "loaderId" ).style.display = "none"
            }
        }
    } catch ( error ) {
        document.getElementById( "loaderId" ).style.display = "none"
    }
}

// funkce pro zkopirovani zasifrovaneho textu po kliknuti do textoveho pole 
function copyText123() {
    var copyTxt = document.getElementById( "encryptedStringId" );
    if ( copyTxt.value === null || copyTxt.value === '' || copyTxt.value === undefined ) {
        return
    };
    copyTxt.select();
    copyTxt.setSelectionRange( 0, 99999 );
    navigator.clipboard.writeText( copyTxt.value );
    alert( "Šifrovaný kód zkopírován do schránky." )
}
