var fileData = "";
var fileUpload = false;
var filename = "";
var encryptedData = "";

function reset() {
    document.getElementById( "isReadyId" ).style.display = "none"
}

function loadContent() {
    document.getElementById( "shareId" ).style.display = "none";

    document.getElementById( "loaderId" ).style.display = "none";
    document.getElementById( "inputTypeMessageId" ).style.display = "block";
    document.getElementById( "inputTypeFileId" ).style.display = "none";
    document.getElementById( "ciphersPBKDF2YesId" ).style.display = "none";
    filename = "";
    reset()
}

function changeCiphersPBKDF2() {
    reset();
    var valuesPbkdf2 = document.getElementById( "ciphersPBKDF2Id" ).value;
    document.getElementById( "bitId" ).value = 128;
    document.getElementById( "ciphersIterationsId" ).value = 0;
    if ( valuesPbkdf2 === "Yes" ) {
        document.getElementById( "ciphersPBKDF2YesId" ).style.display = "block"
    } else {
        document.getElementById( "ciphersPBKDF2YesId" ).style.display = "none"
    }
}

function onChangeEncryptionMethod() {
    reset();
    var typeMethod = document.getElementById( "encryptionMethodId" ).value;
    document.getElementById( "ciphersPBKDF2Id" ).value = "No";
    document.getElementById( "bitId" ).value = 128;
    document.getElementById( "paddingId" ).value = "";
    document.getElementById( "ciphersPBKDF2Id" ).value = "No";
    document.getElementById( "ciphersIterationsId" ).value = 0;
    if ( typeMethod === "DES" || typeMethod === "TripleDES" || typeMethod === "Rabbit" || typeMethod === "RC4" ||
        typeMethod === "RC4Drop" ) {
        document.getElementById( "paddingAndciphersPBKDF2Id" ).style.display = "none";
        document.getElementById( "ciphersPBKDF2YesId" ).style.display = "none"
    } else {
        document.getElementById( "paddingAndciphersPBKDF2Id" ).style.display = "block";
        document.getElementById( "ciphersPBKDF2YesId" ).style.display = "block"
    };
    changeCiphersPBKDF2()
}

function changeInputType() {
    reset();
    var inputType = document.getElementById( "inputTypeId" ).value;
    if ( inputType === "Message" ) {
        document.getElementById( "inputTypeFileId" ).style.display = "none";
        document.getElementById( "inputTypeMessageId" ).style.display = "block";
        document.getElementById( "enctStrblockId" ).style.display = "block"
    } else {
        document.getElementById( "inputTypeFileId" ).style.display = "block";
        document.getElementById( "inputTypeMessageId" ).style.display = "none";
        document.getElementById( "enctStrblockId" ).style.display = "none"
    }
}

function desktopViewEncrypt() {
    reset();
    var cripher = "";
    var inputType = document.getElementById( "inputTypeId" ).value;
    var message = document.getElementById( "messageId" ).value;
    var password = document.getElementById( "passwordId" ).value;
    cripher = "";
    if ( inputType === "Message" && ( message === undefined || message === "" || message.trim() === ""
    ) ) {
        alert( "Prosím zadejte zprávu k dešifrování...." );
        return
    } else {
        if ( inputType === File && fileUpload === false ) {
            alert( "Prosím nahrejte soubor...." );
            return
        }
    };
    if ( password === undefined || password === "" || password.trim() === "" ) {
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
    var typeMethod = document.getElementById( "encryptionMethodId" ).value;
    var PBKDF2 = document.getElementById( "ciphersPBKDF2Id" ).value;
    var bite = document.getElementById( "bitId" ).value;
    var iterace = document.getElementById( "ciphersIterationsId" ).value;
    var paddingNorm = document.getElementById( "paddingId" ).value;
    _Ciphers( message, password, inputType, cripher, typeMethod, PBKDF2, bite, iterace, paddingNorm )
}

function _Ciphers( message, password, inputType, cripher, typeMethod, PBKDF2, bite, iterace,
    paddingNorm ) {
    encryptedData = "";
    try {
        if ( typeMethod === "DES" ) {
            cripher = CryptoJS.DES.encrypt( message, password );
            cripher = cripher.toString()
        } else {
            if ( typeMethod === "TripleDES" ) {
                cripher = CryptoJS.TripleDES.encrypt( message, password );
                cripher = cripher.toString()
            } else {
                if ( typeMethod === "Rabbit" ) {
                    cripher = CryptoJS.Rabbit.encrypt( message, password );
                    cripher = cripher.toString()
                } else {
                    if ( typeMethod === "RC4" ) {
                        cripher = CryptoJS.RC4.encrypt( message, password );
                        cripher = cripher.toString()
                    } else {
                        if ( typeMethod === "RC4Drop" ) {
                            cripher = CryptoJS.RC4Drop.encrypt( message, password );
                            cripher = cripher.toString()
                        } else {
                            let mode = null;
                            if ( typeMethod === "CBC" ) {
                                mode = CryptoJS.mode.CBC
                            } else {
                                if ( typeMethod === "ECB" ) {
                                    mode = CryptoJS.mode.ECB
                                } else {
                                    if ( typeMethod === "CFB" ) {
                                        mode = CryptoJS.mode.CFB
                                    } else {
                                        if ( typeMethod === "CTR" ) {
                                            mode = CryptoJS.mode.CTR
                                        } else {
                                            if ( typeMethod === "OFB" ) {
                                                mode = CryptoJS.mode.OFB
                                            }
                                        }
                                    }
                                }
                            };
                            if ( paddingNorm === "Pkcs7" ) {
                                paddingNorm = CryptoJS.pad.Pkcs7
                            } else {
                                if ( paddingNorm === "Iso97971" ) {
                                    paddingNorm = CryptoJS.pad.Iso97971
                                } else {
                                    if ( paddingNorm === "AnsiX923" ) {
                                        paddingNorm = CryptoJS.pad.AnsiX923
                                    } else {
                                        if ( paddingNorm === "Iso10126" ) {
                                            paddingNorm = CryptoJS.pad.Iso10126
                                        } else {
                                            if ( paddingNorm === "ZeroPadding" ) {
                                                paddingNorm = CryptoJS.pad.ZeroPadding
                                            } else {
                                                if ( paddingNorm === "NoPadding" ) {
                                                    paddingNorm = CryptoJS.pad.NoPadding
                                                } else {
                                                    paddingNorm = ""
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            if ( inputType === File ) {
                                message = fileData
                            };
                            if ( PBKDF2 === "Yes" ) {
                                let _0x1ac1x18 = 0;
                                if ( bite == 128 ) {
                                    _0x1ac1x18 = 128 / 32
                                } else {
                                    if ( bite == 192 ) {
                                        _0x1ac1x18 = 192 / 32
                                    } else {
                                        if ( bite == 256 ) {
                                            _0x1ac1x18 = 256 / 32
                                        }
                                    }
                                };
                                let iv = CryptoJS.lib.WordArray.random( 128 / 8 );
                                let _0x1ac1x1a = CryptoJS.lib.WordArray.random( 128 / 8 );
                                let _0x1ac1x1b = "";
                                if ( iterace > 0 ) {
                                    _0x1ac1x1b = CryptoJS.PBKDF2( password, _0x1ac1x1a, {
                                        keySize: _0x1ac1x18,
                                        iterations: iterace
                                    } )
                                } else {
                                    _0x1ac1x1b = CryptoJS.PBKDF2( password, _0x1ac1x1a, {
                                        keySize: _0x1ac1x18
                                    } )
                                };
                                let _0x1ac1x1c = null;
                                if ( paddingNorm === "" ) {
                                    _0x1ac1x1c = CryptoJS.AES.encrypt( message, _0x1ac1x1b, {
                                        iv: iv,
                                        mode: mode
                                    } )
                                } else {
                                    _0x1ac1x1c = CryptoJS.AES.encrypt( message, _0x1ac1x1b, {
                                        iv: iv,
                                        mode: mode,
                                        padding: paddingNorm
                                    } )
                                };
                                cripher = _0x1ac1x1a.toString() + iv.toString() + _0x1ac1x1c.toString()
                            } else {
                                if ( paddingNorm === "" ) {
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
        };
        encryptedData = cripher + "";
        if ( inputType === "Message" ) {
            document.getElementById( "encryptedStringId" ).value = encryptedData
        };
        document.getElementById( "isReadyId" ).style.display = "block";
        document.getElementById( "loaderId2" ).style.display = "none"
    } catch ( error ) {
        document.getElementById( "encryptedStringId" ).value = "";
        document.getElementById( "isReadyId" ).style.display = "none";
        document.getElementById( "loaderId2" ).style.display = "none"
    }
}



var _0xef04 = [ "", "\x64\x69\x73\x70\x6C\x61\x79", "\x73\x74\x79\x6C\x65", "\x69\x73\x52\x65\x61\x64\x79\x49\x64", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x6E\x6F\x6E\x65", "\x6C\x6F\x61\x64\x65\x72\x49\x64", "\x69\x6E\x70\x75\x74\x54\x79\x70\x65\x4D\x65\x73\x73\x61\x67\x65\x49\x64", "\x62\x6C\x6F\x63\x6B", "\x69\x6E\x70\x75\x74\x54\x79\x70\x65\x46\x69\x6C\x65\x49\x64", "\x63\x69\x70\x68\x65\x72\x73\x50\x42\x4B\x44\x46\x32\x59\x65\x73\x49\x64", "\x76\x61\x6C\x75\x65", "\x63\x69\x70\x68\x65\x72\x73\x50\x42\x4B\x44\x46\x32\x49\x64", "\x62\x69\x74\x49\x64", "\x31\x32\x38", "\x63\x69\x70\x68\x65\x72\x73\x49\x74\x65\x72\x61\x74\x69\x6F\x6E\x73\x49\x64", "\x30", "\x59\x65\x73", "\x65\x6E\x63\x72\x79\x70\x74\x69\x6F\x6E\x4D\x65\x74\x68\x6F\x64\x49\x64", "\x4E\x6F", "\x70\x61\x64\x64\x69\x6E\x67\x49\x64", "\x44\x45\x53", "\x54\x72\x69\x70\x6C\x65\x44\x45\x53", "\x52\x61\x62\x62\x69\x74", "\x52\x43\x34", "\x52\x43\x34\x44\x72\x6F\x70", "\x70\x61\x64\x64\x69\x6E\x67\x41\x6E\x64\x63\x69\x70\x68\x65\x72\x73\x50\x42\x4B\x44\x46\x32\x49\x64", "\x69\x6E\x70\x75\x74\x54\x79\x70\x65\x49\x64", "\x4D\x65\x73\x73\x61\x67\x65", "\x65\x6E\x63\x74\x53\x74\x72\x62\x6C\x6F\x63\x6B\x49\x64", "\x6D\x65\x73\x73\x61\x67\x65\x49\x64", "\x70\x61\x73\x73\x77\x6F\x72\x64\x49\x64", "\x74\x72\x69\x6D", "\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x4D\x65\x73\x73\x61\x67\x65\x2A\x2A", "\x46\x69\x6C\x65", "\x50\x6C\x65\x61\x73\x65\x20\x55\x70\x6C\x6F\x61\x64\x20\x46\x69\x6C\x65\x2A\x2A", "\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x50\x61\x73\x73\x77\x6F\x72\x64\x2A\x2A", "\x6C\x6F\x61\x64\x65\x72\x49\x64\x32", "\x65\x6E\x63\x72\x79\x70\x74", "\x43\x42\x43", "\x6D\x6F\x64\x65", "\x45\x43\x42", "\x43\x46\x42", "\x43\x54\x52", "\x4F\x46\x42", "\x50\x6B\x63\x73\x37", "\x70\x61\x64", "\x49\x73\x6F\x39\x37\x39\x37\x31", "\x41\x6E\x73\x69\x58\x39\x32\x33", "\x49\x73\x6F\x31\x30\x31\x32\x36", "\x5A\x65\x72\x6F\x50\x61\x64\x64\x69\x6E\x67", "\x4E\x6F\x50\x61\x64\x64\x69\x6E\x67", "\x31\x39\x32", "\x32\x35\x36", "\x72\x61\x6E\x64\x6F\x6D", "\x57\x6F\x72\x64\x41\x72\x72\x61\x79", "\x6C\x69\x62", "\x41\x45\x53", "\x65\x6E\x63\x72\x79\x70\x74\x65\x64\x53\x74\x72\x69\x6E\x67\x49\x64", "\x61", "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74", "\x68\x72\x65\x66", "\x64\x61\x74\x61\x3A\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x3B\x63\x68\x61\x72\x73\x65\x74\x3D\x75\x74\x66\x2D\x38\x2C", "\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x64\x6F\x77\x6E\x6C\x6F\x61\x64", "\x2E\x74\x78\x74", "\x63\x6C\x69\x63\x6B", "\x6C\x65\x6E\x67\x74\x68", "\x2E", "\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66", "\x73\x75\x62\x73\x74\x72\x69\x6E\x67", "\x45\x6E\x63\x72\x79\x70\x74\x65\x64\x44\x61\x74\x61", "\x66\x69\x6C\x65\x73", "\x74\x61\x72\x67\x65\x74", "\x6E\x61\x6D\x65", "\x72\x65\x61\x64\x41\x73\x44\x61\x74\x61\x55\x52\x4C", "\x6F\x6E\x6C\x6F\x61\x64", "\x72\x65\x73\x75\x6C\x74", "\x73\x65\x6C\x65\x63\x74", "\x73\x65\x74\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E\x52\x61\x6E\x67\x65", "\x77\x72\x69\x74\x65\x54\x65\x78\x74", "\x63\x6C\x69\x70\x62\x6F\x61\x72\x64", "\x45\x6E\x63\x72\x79\x70\x74\x65\x64\x20\x43\x6F\x64\x65\x20\x63\x6F\x70\x69\x65\x64\x20\x74\x6F\x20\x63\x6C\x69\x70\x62\x6F\x61\x72\x64\x2E" ];



function downloadFile() {
    var aTag = document.createElement( "a" );
    aTag.setAttribute( "href", "data: text / plain; charset = utf - 8," + encryptedData );
    console.log( getFileName() );
    aTag.setAttribute( 'download', getFileName() + '.txt' );
    console.log( getFileName() );
    aTag.click()
}

function getFileName() {
    var inputType = document.getElementById( "inputTypeId" ).value;
    if ( inputType === "File" && filename !== null && filename !== "" && filename !== undefined && filename.length > 0 ) {
        return filename.substring( 0, filename.lastIndexOf( "." ) )
    } else {
        return "EncryptedData"
    }
}


function onSelectFile( _0x1ac1x21 ) {
    try {
        fileData = null;
        document[ _0xef04[ 4 ] ]( _0xef04[ 6 ] )[ _0xef04[ 2 ] ][ _0xef04[ 1 ] ] = _0xef04[ 8 ];
        if ( _0x1ac1x21[ _0xef04[ 73 ] ][ _0xef04[ 72 ] ] && _0x1ac1x21[ _0xef04[ 73 ] ][ _0xef04[ 72 ] ][ 0 ] ) {
            filename = _0x1ac1x21[ _0xef04[ 73 ] ][ _0xef04[ 72 ] ][ 0 ][ _0xef04[ 74 ] ];
            var _0x1ac1x22 = new FileReader();
            _0x1ac1x22[ _0xef04[ 75 ] ]( _0x1ac1x21[ _0xef04[ 73 ] ][ _0xef04[ 72 ] ][ 0 ] );
            _0x1ac1x22[ _0xef04[ 76 ] ] = ( _0x1ac1x21 ) => {
                fileData = _0x1ac1x21[ _0xef04[ 73 ] ][ _0xef04[ 77 ] ].toString();
                fileUpload = true;
                document[ _0xef04[ 4 ] ]( _0xef04[ 6 ] )[ _0xef04[ 2 ] ][ _0xef04[ 1 ] ] = _0xef04[ 5 ]
            }
        }
    } catch ( error ) {
        document[ _0xef04[ 4 ] ]( _0xef04[ 6 ] )[ _0xef04[ 2 ] ][ _0xef04[ 1 ] ] = _0xef04[ 5 ]
    }
}

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
