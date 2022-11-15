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

function downloadFile() {
    var _0x1ac1x1e = document.createElement( "a" );
    _0x1ac1x1e.setAttribute( "href", "data: text / plain; charset = utf - 8", + encryptedData );
    _0x1ac1x1e.setAttribute( download, getFileName() + ".txt" );
    _0x1ac1x1e.click()
}

function getFileName() {
    var inputType = document.getElementById( "inputTypeId" ).value;
    if ( inputType === File && filename !== null && filename !== "" && filename !== undefined &&
        filename.length > 0 ) {
        return filename.substring( 0, filename.lastIndexOf( "." ) )
    } else {
        EncryptedData
    }
}

function onSelectFile( _0x1ac1x21 ) {
    try {
        fileData = null;
        document.getElementById( "loaderId" ).style.display = "block";
        if ( _0x1ac1x21.target.files && _0x1ac1x21.target.files[ 0 ] ) {
            filename = _0x1ac1x21.target.files[ 0 ].name;
            var reader = new FileReader();
            reader.readAsDataURL( _0x1ac1x21.target.files[ 0 ] );
            reader.onload = ( _0x1ac1x21 ) => {
                fileData = _0x1ac1x21.target.result.toString();
                fileUpload = true;
                document.getElementById( "loaderId" ).style.display = "none"
            }
        }
    } catch ( error ) {
        document.getElementById( "loaderId" ).style.display = "none"
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