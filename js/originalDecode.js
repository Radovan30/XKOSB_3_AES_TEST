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
var fileData = '';
var fileUpload = false;
var filename = '';

function reset() {
    document[ _0xb1e7[ 138 ] ]( _0xb1e7[ 137 ] )[ _0xb1e7[ 136 ] ][ _0xb1e7[ 135 ] ] = _0xb1e7[ 139 ]
}

function loadContent() {
    document[ _0xb1e7[ 138 ] ]( _0xb1e7[ 140 ] )[ _0xb1e7[ 136 ] ][ _0xb1e7[ 135 ] ] = _0xb1e7[ 139 ];
    document[ 'getElementById' ]( 'inputTypeMessageId' )[ 'style' ][ 'display' ] = 'block';
    document[ 'getElementById' ]( 'inputTypeFileId' )[ 'style' ][ 'display' ] = 'none';
    document[ 'getElementById' ]( 'ciphersPBKDF2YesId' )[ 'style' ][ 'display' ] = 'block';
    filename = '';
    reset()
}

function changeCiphersPBKDF2() {
    reset();
    var _0x719dx8 = document[ 'getElementById' ]( 'ciphersPBKDF2Id' )[ 'value' ];
    document[ 'getElementById' ]( 'bitId' )[ 'value' ] = '128';
    document[ 'getElementById' ]( 'ciphersIterationsId' )[ 'value' ] = '0';
    if ( _0x719dx8 === 'Yes' ) {
        document[ _0xb1e7[ 138 ] ]( _0xb1e7[ 144 ] )[ _0xb1e7[ 136 ] ][ _0xb1e7[ 135 ] ] = _0xb1e7[ 142 ]
    } else {
        document[ _0xb1e7[ 138 ] ]( _0xb1e7[ 144 ] )[ _0xb1e7[ 136 ] ][ _0xb1e7[ 135 ] ] = _0xb1e7[ 139 ]
    }
}

function onChangeEncryptionMethod() {
    reset();
    var _0x719dxa = document[ 'getElementById' ]( 'encryptionMethodId' )[ 'value' ];
    document[ 'getElementById' ]( 'ciphersPBKDF2Id' )[ 'value' ] = 'No';
    document[ 'getElementById' ]( 'bitId' )[ 'value' ] = '128';
    document[ 'getElementById' ]( 'paddingId' )[ 'value' ] = '';
    document[ 'getElementById' ]( 'ciphersPBKDF2Id' )[ 'value' ] = 'No';
    document[ 'getElementById' ]( 'ciphersIterationsId' )[ 'value' ] = '0';
    if ( _0x719dxa === 'DES' || _0x719dxa === 'TripleDES' || _0x719dxa === 'Rabbit' || _0x719dxa === 'RC4' || _0x719dxa === 'RC4Drop' ) {
        document[ _0xb1e7[ 138 ] ]( _0xb1e7[ 160 ] )[ _0xb1e7[ 136 ] ][ _0xb1e7[ 135 ] ] = _0xb1e7[ 139 ];
        document[ 'getElementById' ]( 'ciphersPBKDF2YesId' )[ 'style' ][ 'display' ] = 'none'
    } else {
        document[ _0xb1e7[ 138 ] ]( _0xb1e7[ 160 ] )[ _0xb1e7[ 136 ] ][ _0xb1e7[ 135 ] ] = _0xb1e7[ 142 ];
        document[ 'getElementById' ]( 'ciphersPBKDF2YesId' )[ 'style' ][ 'display' ] = 'block'
    };
    changeCiphersPBKDF2()
}

function changeInputType() {
    reset();
    var _0x719dxc = document[ 'getElementById' ]( 'inputTypeId' )[ 'value' ];
    if ( _0x719dxc === 'Message' ) {
        document[ _0xb1e7[ 138 ] ]( _0xb1e7[ 143 ] )[ _0xb1e7[ 136 ] ][ _0xb1e7[ 135 ] ] = _0xb1e7[ 139 ];
        document[ 'getElementById' ]( 'inputTypeMessageId' )[ 'style' ][ 'display' ] = 'block';
        document[ 'getElementById' ]( 'enctStrblockId' )[ 'style' ][ 'display' ] = 'block'
    } else {
        document[ _0xb1e7[ 138 ] ]( _0xb1e7[ 143 ] )[ _0xb1e7[ 136 ] ][ _0xb1e7[ 135 ] ] = _0xb1e7[ 142 ];
        document[ 'getElementById' ]( 'inputTypeMessageId' )[ 'style' ][ 'display' ] = 'none';
        document[ 'getElementById' ]( 'enctStrblockId' )[ 'style' ][ 'display' ] = 'none'
    }
}

function desktopViewEncrypt() {
    reset();
    var _0x719dxe = '';
    var _0x719dxc = document[ 'getElementById' ]( 'inputTypeId' )[ 'value' ];
    var _0x719dxf = document[ 'getElementById' ]( 'messageId' )[ 'value' ];
    var _0x719dx10 = document[ 'getElementById' ]( 'passwordId' )[ 'value' ];
    _0x719dxe = '';
    if ( _0x719dxc === 'Message' && ( _0x719dxf === undefined || _0x719dxf === '' || _0x719dxf[ 'trim' ]() === '' ) ) {
        alert( _0xb1e7[ 167 ] );
        return
    } else {
        if ( _0x719dxc === 'File' && fileUpload === false ) {
            alert( _0xb1e7[ 169 ] );
            return
        }
    };
    if ( _0x719dx10 === undefined || _0x719dx10 === '' || _0x719dx10[ 'trim' ]() === '' ) {
        alert( _0xb1e7[ 170 ] );
        return
    };
    document[ 'getElementById' ]( 'loaderId2' )[ 'style' ][ 'display' ] = 'block';
    setTimeout( myGreeting, 2000 )
}

function myGreeting() {
    var _0x719dxe = '';
    var _0x719dxc = document[ 'getElementById' ]( 'inputTypeId' )[ 'value' ];
    var _0x719dxf = document[ 'getElementById' ]( 'messageId' )[ 'value' ];
    var _0x719dx10 = document[ 'getElementById' ]( 'passwordId' )[ 'value' ];
    _Ciphers( _0x719dxf, _0x719dx10, _0x719dxc, _0x719dxe )
}

function _Ciphers( _0x719dxf, _0x719dx10, _0x719dxc, _0x719dx13 ) {
    var _0x719dxa = document[ 'getElementById' ]( 'encryptionMethodId' )[ 'value' ];
    var _0x719dx14 = document[ 'getElementById' ]( 'ciphersPBKDF2Id' )[ 'value' ];
    var _0x719dx15 = document[ 'getElementById' ]( 'bitId' )[ 'value' ];
    var _0x719dx16 = document[ 'getElementById' ]( 'ciphersIterationsId' )[ 'value' ];
    try {
        if ( _0x719dxa === 'DES' ) {
            _0x719dx13 = CryptoJS[ _0xb1e7[ 155 ] ][ _0xb1e7[ 173 ] ]( _0x719dxf, _0x719dx10 ).toString( CryptoJS[ _0xb1e7[ 172 ] ].Utf8 )
        } else {
            if ( _0x719dxa === 'TripleDES' ) {
                _0x719dx13 = CryptoJS[ _0xb1e7[ 156 ] ][ _0xb1e7[ 173 ] ]( _0x719dxf, _0x719dx10 ).toString( CryptoJS[ _0xb1e7[ 172 ] ].Utf8 )
            } else {
                if ( _0x719dxa === 'Rabbit' ) {
                    _0x719dx13 = CryptoJS[ _0xb1e7[ 157 ] ][ _0xb1e7[ 173 ] ]( _0x719dxf, _0x719dx10 ).toString( CryptoJS[ _0xb1e7[ 172 ] ].Utf8 )
                } else {
                    if ( _0x719dxa === 'RC4' ) {
                        _0x719dx13 = CryptoJS[ _0xb1e7[ 158 ] ][ _0xb1e7[ 173 ] ]( _0x719dxf, _0x719dx10 ).toString( CryptoJS[ _0xb1e7[ 172 ] ].Utf8 )
                    } else {
                        if ( _0x719dxa === 'RC4Drop' ) {
                            _0x719dx13 = CryptoJS[ _0xb1e7[ 159 ] ][ _0xb1e7[ 173 ] ]( _0x719dxf, _0x719dx10 ).toString( CryptoJS[ _0xb1e7[ 172 ] ].Utf8 )
                        } else {
                            let _0x719dx17 = null;
                            var _0x719dx18 = document[ 'getElementById' ]( 'paddingId' )[ 'value' ];
                            if ( _0x719dxa === 'CBC' ) {
                                _0x719dx17 = CryptoJS[ _0xb1e7[ 175 ] ][ _0xb1e7[ 174 ] ]
                            } else {
                                if ( _0x719dxa === 'ECB' ) {
                                    _0x719dx17 = CryptoJS[ _0xb1e7[ 175 ] ][ _0xb1e7[ 176 ] ]
                                } else {
                                    if ( _0x719dxa === 'CFB' ) {
                                        _0x719dx17 = CryptoJS[ _0xb1e7[ 175 ] ][ _0xb1e7[ 177 ] ]
                                    } else {
                                        if ( _0x719dxa === 'CTR' ) {
                                            _0x719dx17 = CryptoJS[ _0xb1e7[ 175 ] ][ _0xb1e7[ 178 ] ]
                                        } else {
                                            if ( _0x719dxa === 'OFB' ) {
                                                _0x719dx17 = CryptoJS[ _0xb1e7[ 175 ] ][ _0xb1e7[ 179 ] ]
                                            }
                                        }
                                    }
                                }
                            };
                            if ( _0x719dx18 === 'Pkcs7' ) {
                                _0x719dx18 = CryptoJS[ _0xb1e7[ 181 ] ][ _0xb1e7[ 180 ] ]
                            } else {
                                if ( _0x719dx18 === 'Iso97971' ) {
                                    _0x719dx18 = CryptoJS[ _0xb1e7[ 181 ] ][ _0xb1e7[ 182 ] ]
                                } else {
                                    if ( _0x719dx18 === 'AnsiX923' ) {
                                        _0x719dx18 = CryptoJS[ _0xb1e7[ 181 ] ][ _0xb1e7[ 183 ] ]
                                    } else {
                                        if ( _0x719dx18 === 'Iso10126' ) {
                                            _0x719dx18 = CryptoJS[ _0xb1e7[ 181 ] ][ _0xb1e7[ 184 ] ]
                                        } else {
                                            if ( _0x719dx18 === 'ZeroPadding' ) {
                                                _0x719dx18 = CryptoJS[ _0xb1e7[ 181 ] ][ _0xb1e7[ 185 ] ]
                                            } else {
                                                if ( _0x719dx18 === 'NoPadding' ) {
                                                    _0x719dx18 = CryptoJS[ _0xb1e7[ 181 ] ][ _0xb1e7[ 186 ] ]
                                                } else {
                                                    _0x719dx18 = _0xb1e7[ 134 ]
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            if ( _0x719dxc === 'File' ) {
                                _0x719dxf = decodeURIComponent( window[ _0xb1e7[ 189 ] ]( fileData[ _0xb1e7[ 188 ] ]( _0xb1e7[ 187 ] )[ 1 ] ) )
                            };
                            if ( _0x719dx14 === 'Yes' ) {
                                let _0x719dx19 = 0;
                                if ( _0x719dx15 == '128' ) {
                                    _0x719dx19 = 128 / 32
                                } else {
                                    if ( _0x719dx15 == '192' ) {
                                        _0x719dx19 = 192 / 32
                                    } else {
                                        if ( _0x719dx15 == '256' ) {
                                            _0x719dx19 = 256 / 32
                                        }
                                    }
                                };
                                let _0x719dx1a = '';
                                let _0x719dx1b = CryptoJS[ 'enc' ][ 'Hex' ][ 'parse' ]( _0x719dxf[ 'substr' ]( 0, 32 ) );
                                let _0x719dx1c = CryptoJS[ 'enc' ][ 'Hex' ][ 'parse' ]( _0x719dxf[ 'substr' ]( 32, 32 ) );
                                var _0x719dx1d = _0x719dxf[ 'substring' ]( 64 );
                                if ( _0x719dx16 > 0 ) {
                                    _0x719dx1a = CryptoJS.PBKDF2( _0x719dx10, _0x719dx1b, {
                                        keySize: _0x719dx19,
                                        iterations: _0x719dx16
                                    } )
                                } else {
                                    _0x719dx1a = CryptoJS.PBKDF2( _0x719dx10, _0x719dx1b, {
                                        keySize: _0x719dx19
                                    } )
                                };
                                if ( _0x719dx18 === '' ) {
                                    _0x719dx13 = CryptoJS[ _0xb1e7[ 196 ] ][ _0xb1e7[ 173 ] ]( _0x719dx1d, _0x719dx1a, {
                                        iv: _0x719dx1c,
                                        mode: _0x719dx17
                                    } ).toString( CryptoJS[ _0xb1e7[ 172 ] ].Utf8 )
                                } else {
                                    _0x719dx13 = CryptoJS[ _0xb1e7[ 196 ] ][ _0xb1e7[ 173 ] ]( _0x719dx1d, _0x719dx1a, {
                                        iv: _0x719dx1c,
                                        mode: _0x719dx17,
                                        padding: _0x719dx18
                                    } ).toString( CryptoJS[ _0xb1e7[ 172 ] ].Utf8 )
                                }
                            } else {
                                if ( _0x719dx18 === '' ) {
                                    _0x719dx13 = CryptoJS[ _0xb1e7[ 196 ] ][ _0xb1e7[ 173 ] ]( _0x719dxf, _0x719dx10, {
                                        mode: _0x719dx17
                                    } ).toString( CryptoJS[ _0xb1e7[ 172 ] ].Utf8 )
                                } else {
                                    _0x719dx13 = CryptoJS[ _0xb1e7[ 196 ] ][ _0xb1e7[ 173 ] ]( _0x719dxf, _0x719dx10, {
                                        mode: _0x719dx17,
                                        padding: _0x719dx18
                                    } ).toString( CryptoJS[ _0xb1e7[ 172 ] ].Utf8 )
                                }
                            };
                            isReadyEnc = true
                        }
                    }
                }
            }
        };
        var _0x719dx1e = _0x719dx13 + '';
        document[ 'getElementById' ]( 'encryptedStringId' )[ 'value' ] = _0x719dx1e;
        document[ 'getElementById' ]( 'isReadyId' )[ 'style' ][ 'display' ] = 'block';
        document[ 'getElementById' ]( 'loaderId2' )[ 'style' ][ 'display' ] = 'none'
    } catch ( error ) {
        document[ _0xb1e7[ 138 ] ]( _0xb1e7[ 197 ] )[ _0xb1e7[ 145 ] ] = _0xb1e7[ 134 ];
        document[ 'getElementById' ]( 'loaderId2' )[ 'style' ][ 'display' ] = 'none';
        document[ 'getElementById' ]( 'isReadyId' )[ 'style' ][ 'display' ] = 'none';
        alert( 'Select values, which used while Encrypting.' )
    }
}

function downloadDecryptedFile() {
    var _0x719dx13 = document[ 'getElementById' ]( 'encryptedStringId' )[ 'value' ];
    var _0x719dx20 = document[ 'createElement' ]( 'a' );
    let _0x719dx8 = _0x719dx13[ 'split' ]( ',' )[ 0 ];
    let _0x719dx21 = false;
    if ( _0x719dx8[ 'includes' ]( 'base64' ) && _0x719dx8[ 'includes' ]( 'data' ) ) {
        _0x719dx20[ _0xb1e7[ 205 ] ]( _0xb1e7[ 204 ], _0x719dx13 );
        _0x719dx8 = _0x719dx8[ 'split' ]( ';' )[ 0 ];
        _0x719dx8 = _0x719dx8[ 'split' ]( ':' )[ 1 ];
        files[ 'map' ]( ( _0x719dx22 ) => {
            if ( _0x719dx22[ 't' ] === _0x719dx8 ) {
                _0x719dx21 = true;
                _0x719dx20[ 'setAttribute' ]( 'download', getFileName() + _0x719dx22[ 'f' ] )
            }
        } )
    } else {
        _0x719dx20[ _0xb1e7[ 205 ] ]( _0xb1e7[ 204 ], _0xb1e7[ 212 ] + _0x719dx13 );
        _0x719dx20[ 'setAttribute' ]( 'download', 'DecryptedData.txt' );
        _0x719dx21 = true
    };
    _0x719dx20[ 'click' ]();
    if ( !_0x719dx21 ) {
        alert( _0xb1e7[ 215 ] )
    }
}

function getFileName() {
    var _0x719dxc = document[ 'getElementById' ]( 'inputTypeId' )[ 'value' ];
    if ( _0x719dxc === 'File' && filename !== null && filename !== '' && filename !== undefined && filename[ 'length' ] > 0 ) {
        return filename[ 'substring' ]( 0, filename[ 'lastIndexOf' ]( '.' ) )
    } else {
        _0xb1e7[ 219 ]
    }
}

function onSelectFile( _0x719dx25 ) {
    try {
        fileData = null;
        document[ 'getElementById' ]( 'loaderId' )[ 'style' ][ 'display' ] = 'block';
        if ( _0x719dx25[ 'target' ][ 'files' ] && _0x719dx25[ 'target' ][ 'files' ][ 0 ] ) {
            filename = _0x719dx25[ _0xb1e7[ 221 ] ][ _0xb1e7[ 220 ] ][ 0 ][ _0xb1e7[ 222 ] ];
            var _0x719dx26 = new FileReader();
            _0x719dx26[ 'readAsDataURL' ]( _0x719dx25[ 'target' ][ 'files' ][ 0 ] );
            _0x719dx26[ 'onload' ] = ( _0x719dx25 ) => {
                fileData = _0x719dx25[ _0xb1e7[ 221 ] ][ _0xb1e7[ 225 ] ].toString();
                fileUpload = true;
                document[ 'getElementById' ]( 'loaderId' )[ 'style' ][ 'display' ] = 'none'
            }
        }
    } catch ( error ) {
        document[ _0xb1e7[ 138 ] ]( _0xb1e7[ 140 ] )[ _0xb1e7[ 136 ] ][ _0xb1e7[ 135 ] ] = _0xb1e7[ 139 ]
    }
}

function copyText123() {
    var _0x719dx28 = document[ 'getElementById' ]( 'encryptedStringId' );
    if ( _0x719dx28[ 'value' ] === null || _0x719dx28[ 'value' ] === '' || _0x719dx28[ 'value' ] === undefined ) {
        return
    };
    _0x719dx28[ 'select' ]();
    _0x719dx28[ 'setSelectionRange' ]( 0, 99999 );
    navigator[ 'clipboard' ][ 'writeText' ]( _0x719dx28[ 'value' ] );
    alert( 'Encrypted Code copied to clipboard.' )
}