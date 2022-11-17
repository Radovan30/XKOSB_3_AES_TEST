var files = [ {
    "\x66": '.3gp',
    "\x74": 'video/3gpp'
}, {
    "\x66": '.3gp',
    "\x74": 'audio/3gpp'
}, {
    "\x66": '.3g2',
    "\x74": 'video/3gpp2'
}, {
    "\x66": '.3g2',
    "\x74": 'audio/3gpp2'
}, {
    "\x66": '.7z',
    "\x74": 'application/x-7z-compressed'
}, {
    "\x66": '.aac',
    "\x74": 'audio/aac'
}, {
    "\x66": '.abw',
    "\x74": 'application/x-abiword'
}, {
    "\x66": '.arc',
    "\x74": 'application/x-freearc'
}, {
    "\x66": '.avi',
    "\x74": 'video/x-msvideo'
}, {
    "\x66": '.azw',
    "\x74": 'application/vnd.amazon.ebook'
}, {
    "\x66": '.bin',
    "\x74": 'application/octet-stream'
}, {
    "\x66": '.bmp',
    "\x74": 'image/bmp'
}, {
    "\x66": '.bz',
    "\x74": 'application/x-bzip'
}, {
    "\x66": '.bz2',
    "\x74": 'application/x-bzip2'
}, {
    "\x66": '.csh',
    "\x74": 'application/x-csh'
}, {
    "\x66": '.css',
    "\x74": 'text/css'
}, {
    "\x66": '.csv',
    "\x74": 'text/csv'
}, {
    "\x66": '.doc',
    "\x74": 'application/msword'
}, {
    "\x66": '.docx',
    "\x74": 'application/vnd.openxmlformats officedocument.wordprocessingml.document'
}, {
    "\x66": '.eot',
    "\x74": 'application/vnd.ms-fontobject'
}, {
    "\x66": '.epub',
    "\x74": 'application/epub+zip'
}, {
    "\x66": '.gif',
    "\x74": 'image/gif'
}, {
    "\x66": '.html',
    "\x74": 'text/html'
}, {
    "\x66": '.ico',
    "\x74": 'image/vnd.microsoft.icon'
}, {
    "\x66": '.ics',
    "\x74": 'text/calendar'
}, {
    "\x66": '.jar',
    "\x74": 'application/java-archive'
}, {
    "\x66": '.jpeg',
    "\x74": 'image/jpeg'
}, {
    "\x66": '.js',
    "\x74": 'text/javascript'
}, {
    "\x66": '.json',
    "\x74": 'application/json'
}, {
    "\x66": '.midi',
    "\x74": 'audio/midi'
}, {
    "\x66": '.midi',
    "\x74": 'audio/x-midi'
}, {
    "\x66": '.mjs',
    "\x74": 'text/javascript'
}, {
    "\x66": '.mp3',
    "\x74": 'audio/mpeg'
}, {
    "\x66": '.mpeg',
    "\x74": 'video/mpeg'
}, {
    "\x66": '.mpkg',
    "\x74": 'application/vnd.apple.installer+xml'
}, {
    "\x66": '.odp',
    "\x74": 'application/vnd.oasis.opendocument.presentation'
}, {
    "\x66": '.ods',
    "\x74": 'application/vnd.oasis.opendocument.spreadsheet'
}, {
    "\x66": '.odt',
    "\x74": 'application/vnd.oasis.opendocument.text'
}, {
    "\x66": '.oga',
    "\x74": 'audio/ogg'
}, {
    "\x66": '.ogv',
    "\x74": 'video/ogg'
}, {
    "\x66": '.ogx',
    "\x74": 'application/ogg'
}, {
    "\x66": '.otf',
    "\x74": 'font/otf'
}, {
    "\x66": '.png',
    "\x74": 'image/png'
}, {
    "\x66": '.pdf',
    "\x74": 'application/pdf'
}, {
    "\x66": '.ppt',
    "\x74": 'application/vnd.ms-powerpoint'
}, {
    "\x66": '.pptx',
    "\x74": 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
}, {
    "\x66": '.rar',
    "\x74": 'application/x-rar-compressed'
}, {
    "\x66": '.rtf',
    "\x74": 'application/rtf'
}, {
    "\x66": '.sh',
    "\x74": 'application/x-sh'
}, {
    "\x66": '.svg',
    "\x74": 'image/svg+xml'
}, {
    "\x66": '.swf',
    "\x74": 'application/x-shockwave-flash'
}, {
    "\x66": '.tar',
    "\x74": 'application/x-tar'
}, {
    "\x66": '.tiff',
    "\x74": 'image/tiff'
}, {
    "\x66": '.ttf',
    "\x74": 'font/ttf'
}, {
    "\x66": '.txt',
    "\x74": 'text/plain'
}, {
    "\x66": '.vsd',
    "\x74": 'application/vnd.visio'
}, {
    "\x66": '.wav',
    "\x74": 'audio/wav'
}, {
    "\x66": '.weba',
    "\x74": 'audio/webm'
}, {
    "\x66": '.webm',
    "\x74": 'video/webm'
}, {
    "\x66": '.webp',
    "\x74": 'image/webm'
}, {
    "\x66": '.woff',
    "\x74": 'font/woff'
}, {
    "\x66": '.woff2',
    "\x74": 'font/woff2'
}, {
    "\x66": '.xhtml',
    "\x74": 'application/xhtml+xml'
}, {
    "\x66": '.xls',
    "\x74": 'application/vnd.ms-excel'
}, {
    "\x66": '.xlsx',
    "\x74": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
}, {
    "\x66": '.xml',
    "\x74": 'application/xml'
}, {
    "\x66": '.xml',
    "\x74": 'text/xml'
}, {
    "\x66": '.xul',
    "\x74": 'application/vnd.mozilla.xul+xml'
}, {
    "\x66": '.zip',
    "\x74": 'application/zip'
}, {
    "\x66": '.zip',
    "\x74": 'application/x-zip-compressed'
} ];


var fileData = "";
var fileUpload = false;
var filename = "";

// funkce pro restartovani zobrazeni buttonu pro stahovani souboru

function reset() {
    document.getElementById( "isReadyId" ).style.display = "none"
}

// funkce pro zobrazeni loaderu
function loadContent() {
    document.getElementById( "isReadyId" ).style.display = "none";
    document.getElementById( "inputTypeMessageId" ).style.display = "block";
    document.getElementById( "inputTypeFileId" ).style.display = "none";
    document.getElementById( "ciphersPBKDF2YesId" ).style.display = "block";
    filename = "";
    reset()
}

// funkce pro zapnuti a zaznamenani hodnoty pro rozsireni sifrovaciho klice podle bitove velikosti 
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
    if ( typeMethod === 'DES' || typeMethod === 'TripleDES' || typeMethod === 'Rabbit' || typeMethod === 'RC4' || typeMethod === 'RC4Drop') {
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

    if ( inputType === 'Message' && ( message === undefined || message === '' || message.trim() === '' ) ) {
        alert( "Prosím zadejte zprávu k dešifrování...." );
        return
    } else {
        if ( inputType === 'File' && fileUpload === false ) {
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



function myGreeting() {
    var cripher = "";
    var inputType = document.getElementById( "inputTypeId" ).value;
    var message = document.getElementById( "messageId" ).value;
    var password = document.getElementById( "passwordId" ).value;
    _Ciphers( message, password, inputType, cripher )
}

function _Ciphers( message, password, inputType, method ) {
    var typeMethod = document.getElementById( "encryptionMethodId" ).value;
    var PBKDF2 = document.getElementById( "ciphersPBKDF2Id" ).value;
    var bite = document.getElementById( "bitId" ).value;
    var iterace = document.getElementById( "ciphersIterationsId" ).value;

    console.log( "Metoda:", typeMethod, " PBKDF2:", PBKDF2, " Bit:", bite, " iterace:", iterace );
    try {
        if ( typeMethod === 'DES' ) {
            console.log( "DES" );
            method = CryptoJS.DES.decrypt( message, password ).toString( CryptoJS.enc.Utf8 )
        } else {
            if ( typeMethod === 'TripleDES' ) {
                console.log( "TripleDES" );
                method = CryptoJS.TripleDES.decrypt( message, password ).toString( CryptoJS.enc.Utf8 )
            } else {
                if ( typeMethod === 'Rabbit' ) {
                    console.log( "Rabbit" );
                    method = CryptoJS.Rabbit.decrypt( message, password ).toString(
                        CryptoJS.enc.Utf8 )
                } else {
                    if ( typeMethod === 'RC4' ) {
                        console.log( "RC4" );
                        method = CryptoJS.RC4.decrypt( message, password ).toString(
                            CryptoJS.enc.Utf8 )
                    } else {
                        if ( typeMethod === 'RC4Drop' ) {
                            console.log( "RC4Drop" );
                            method = CryptoJS.RC4Drop.decrypt( message, password ).toString(
                                CryptoJS.enc.Utf8 )
                        } else {
                            let mode = null;
                            var paddingNorm = document.getElementById( "paddingId" ).value;
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
                                                    paddingNorm = ""
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            if ( inputType === 'File' ) {
                                message = decodeURIComponent( window.atob( fileData.split(
                                    ',' )[ 1 ] ) )
                            };
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
                                let key = "";
                                let encrypted = CryptoJS.enc.Hex.parse( message.substr( 0, 32 ) );
                                let iv = CryptoJS.enc.Hex.parse( message.substr( 32, 32 ) );
                                var decrypt = message.substring( 64 );
                                if ( iterace > 0 ) {
                                    key = CryptoJS.PBKDF2( password, encrypted, {
                                        keySize: biteSize,
                                        iterations: iterace
                                    } )
                                } else {
                                    key = CryptoJS.PBKDF2( password, encrypted, {
                                        keySize: biteSize
                                    } )
                                };
                                if ( paddingNorm === '' ) {
                                    method = CryptoJS.AES.decrypt( decrypt,
                                        key, {
                                        iv: iv,
                                        mode: mode
                                    } ).toString( CryptoJS.enc.Utf8 )
                                } else {
                                    method = CryptoJS.AES.decrypt( decrypt,
                                        key, {
                                        iv: iv,
                                        mode: mode,
                                        padding: paddingNorm
                                    } ).toString( CryptoJS.enc.Utf8 )
                                }
                            } else {
                                if ( paddingNorm === '' ) {
                                    method = CryptoJS.AES.decrypt( message, password, {
                                        mode: mode
                                    } ).toString( CryptoJS.enc.Utf8 )
                                } else {
                                    method = CryptoJS.AES.decrypt( message, password, {
                                        mode: mode,
                                        padding: paddingNorm
                                    } ).toString( CryptoJS.enc.Utf8 )
                                }
                            };
                            isReadyEnc = true
                        }
                    }
                }
            }
        };
        var controlParameters = method + "";
        document.getElementById( "encryptedStringId" ).value = controlParameters;
        document.getElementById( "isReadyId" ).style.display = "block";
        document.getElementById( "loaderId2" ).style.display = "none"
        console.log( controlParameters );
    } catch ( error ) {
        document.getElementById( "encryptedStringId" ).value = "";
        document.getElementById( "loaderId2" ).style.display = "none";
        document.getElementById( "isReadyId" ).style.display = "none";
        alert( "Vyberte stejné nastavení jako u šifrované zprávy...!" )
    }
}


function desktopViewEncrypt() {
    reset();
    var cripher = "";
    var inputType = document.getElementById( "inputTypeId" ).value;
    var message = document.getElementById( "messageId" ).value;
    var password = document.getElementById( "passwordId" ).value;
    cripher = "";

    if ( inputType === 'Message' && ( message === undefined || message === '' || message.
        trim() === '' ) ) {
        alert( "Prosím zadejte zprávu k dešifrování...." );
        return
    } else {
        if ( inputType === 'File' && fileUpload === false ) {
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

function downloadDecryptedFile() {
    var msgDownload = document.getElementById( "encryptedStringId" ).value;
    var aTag = document.createElement( "a" );
    let valuesPbkdf2 = msgDownload.split( "," )[ 0 ];
    let types = false;
    if ( valuesPbkdf2.includes( 'base64' ) && valuesPbkdf2.includes( 'data' ) ) {
        aTag.setAttribute( 'href', msgDownload );
        valuesPbkdf2 = valuesPbkdf2.split( ";" )[ 0 ];
        valuesPbkdf2 = valuesPbkdf2.split( ":" )[ 1 ];
        files.map( ( object ) => {
            if ( object.t === valuesPbkdf2 ) {
                types = true;
                aTag.setAttribute( "download", getFileName() + object.f )
            }
        } )
    } else {
        aTag.setAttribute( 'href', 'data: text / plain; charset = utf - 8,' + msgDownload );
        aTag.setAttribute( "download", "DecryptedData.txt" );
        types = true
    };
    aTag.click();
    if ( !types ) {
        alert( "Tento typ souboru není podporován." )
    }
}

// funkce pro vraceni textoveho nazvu souboru
function getFileName() {
    var inputType = document.getElementById( "inputTypeId" ).value;
    if ( inputType === 'File' && filename !== null && filename !== '' && filename !== undefined && filename.length > 0 ) {
        return filename.substring( 0, filename.lastIndexOf( "." ) )
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

// funkce pro zkopirovani rozsifrovaneho textu po kliknuti do textoveho pole
function copyText123() {
    var copyTxt = document.getElementById( "encryptedStringId" );
    if ( copyTxt.value === null || copyTxt.value === "" || copyTxt.value === undefined ) {
        return
    };
    copyTxt.select();
    copyTxt.setSelectionRange( 0, 99999 );
    navigator.clipboard.writeText( copyTxt.value );
    alert( "Šifrovaný kód zkopírován do schránky." )
}


