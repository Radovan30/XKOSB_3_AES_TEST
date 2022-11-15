var fileData = "";
var fileUpload = false;
var filename = "";

function reset() {
    document.getElementById( "isReadyId" ).style.display = "none"
}

function loadContent() {
    document.getElementById( "isReadyId" ).style.display = "none";
    document.getElementById( "inputTypeMessageId" ).style.display = "block";
    document.getElementById( "inputTypeFileId" ).style.display = "none";
    document.getElementById( "ciphersPBKDF2YesId" ).style.display = "block";
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
    if ( typeMethod === "DES" || typeMethod === "TripleDES" || typeMethod === "Rabbit" ||
        typeMethod === "RC4" || typeMethod === "RC4Drop" ) {
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
    var result = "";
    var inputType = document.getElementById( "inputTypeId" ).value;
    var message = document.getElementById( "messageId" ).value;
    var password = document.getElementById( "passwordId" ).value;
    result = "";
    console.log( "desktop: ", result )
    if ( inputType === "Message" && ( message === undefined || message === "" || message.
        trim() === "" ) ) {
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
    var result = "";
    var inputType = document.getElementById( "inputTypeId" ).value;
    var message = document.getElementById( "messageId" ).value;
    var password = document.getElementById( "passwordId" ).value;
    _Ciphers( message, password, inputType, result )
}

function _Ciphers( message, password, inputType, method ) {
    var typeMethod = document.getElementById( "encryptionMethodId" ).value;
    var PBKDF2 = document.getElementById( "ciphersPBKDF2Id" ).value;
    var bite = document.getElementById( "bitId" ).value;
    var iterace = document.getElementById( "ciphersIterationsId" ).value;

    console.log( "Metoda:", typeMethod, " PBKDF2:", PBKDF2, " Bit:", bite, " iterace:", iterace );
    try {
        if ( typeMethod === "DES" ) {
            console.log( "DES" );
            method = CryptoJS.DES.decrypt( message, password ).toString( CryptoJS.enc.Utf8 )
        } else {
            if ( typeMethod === "TripleDES" ) {
                console.log( "TripleDES" );
                method = CryptoJS.TripleDES.decrypt( message, password ).toString( CryptoJS.enc.Utf8 )
            } else {
                if ( typeMethod === "Rabbit" ) {
                    console.log( "Rabbit" );
                    method = CryptoJS.Rabbit.decrypt( message, password ).toString(
                        CryptoJS.enc.Utf8 )
                } else {
                    if ( typeMethod === "RC4" ) {
                        console.log( "RC4" );
                        method = CryptoJS.RC4.decrypt( message, password ).toString(
                            CryptoJS.enc.Utf8 )
                    } else {
                        if ( typeMethod === "RC4Drop" ) {
                            console.log( "RC4Drop" );
                            method = CryptoJS.RC4Drop.decrypt( message, password ).toString(
                                CryptoJS.enc.Utf8 )
                        } else {
                            let mode = null;
                            var paddingNorm = document.getElementById( "paddingId" ).value;
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
                                message = decodeURIComponent( window.atob( fileData.split(
                                    ',' )[ 1 ] ) )
                            };
                            if ( PBKDF2 === Yes ) {
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
                                if ( paddingNorm === "" ) {
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
                                if ( paddingNorm === "" ) {
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
        console.log( controlParameters );
        document.getElementById( "encryptedStringId" ).value = controlParameters;
        document.getElementById( "isReadyId" ).style.display = "block";
        document.getElementById( "loaderId2" ).style.display = "none"
        console.log( controlParameters );
    } catch ( error ) {
        document.getElementById( "encryptedStringId" ).value = "";
        document.getElementById( "loaderId2" ).style.display = "none";
        document.getElementById( "isReadyId" ).style.display = "none";
        console.log( "catch ", controlParameters );
        alert( "Vyberte hodnoty, které se použijí při šifrování." )
    }
}

function downloadDecryptedFile() {
    var msgDownload = document.getElementById( "encryptedStringId" ).value;
    var aTag = document.createElement( "a" );
    let valuesPbkdf2 = msgDownload.split( "," )[ 0 ];
    let type = false;
    if ( valuesPbkdf2.includes( "base64" ) && valuesPbkdf2.includes( "data" ) ) {
        aTag.setAttribute( href, msgDownload );
        valuesPbkdf2 = valuesPbkdf2.split( ";" )[ 0 ];
        valuesPbkdf2 = valuesPbkdf2.split( ":" )[ 1 ];
        files.map( ( _0x719dx22 ) => {
            if ( _0x719dx22.t === valuesPbkdf2 ) {
                type = true;
                aTag.setAttribute( "download", getFileName() + _0x719dx22.f )
            }
        } )
    } else {
        aTag.setAttribute( "href", "data: text / plain; charset = utf - 8", + msgDownload );
        aTag.setAttribute( "download", "DecryptedData.txt" );
        type = true
    };
    aTag.click();
    if ( !type ) {
        alert( "Tento typ souboru není podporován." )
    }
}

function getFileName() {
    var inputType = document.getElementById( "inputTypeId" ).value;
    if ( inputType === File && filename !== null && filename !== "" && filename !==
        undefined && filename.length > 0 ) {
        return filename.substring( 0, filename.lastIndexOf( "." ) )
    } else {
        EncryptedData
    }
}

function onSelectFile( _0x719dx25 ) {
    try {
        fileData = null;
        document.getElementById( "loaderId" ).style.display = "block";
        if ( _0x719dx25.target.files && _0x719dx25.target.files[ 0 ] ) {
            filename = _0x719dx25.target.files[ 0 ].name;
            var _0x719dx26 = new FileReader();
            _0x719dx26.readAsDataURL( _0x719dx25.target.files[ 0 ] );
            _0x719dx26.onload = ( _0x719dx25 ) => {
                fileData = _0x719dx25.target.result.toString();
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


