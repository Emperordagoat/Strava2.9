const _0x1075d7 = _0x4111;
(function (_0x291b0a, _0x2029d3) {
    const _0x17bbf3 = _0x4111,
        _0x3d9f8b = _0x291b0a();
    while (!![]) {
        try {
            const _0x58a8c8 = parseInt(_0x17bbf3(0x12b)) / 0x1 * (parseInt(_0x17bbf3(0xde)) / 0x2) + parseInt(_0x17bbf3(0x1f3)) / 0x3 + parseInt(_0x17bbf3(0x1de)) / 0x4 * (parseInt(_0x17bbf3(0x178)) / 0x5) + -parseInt(_0x17bbf3(0x1c3)) / 0x6 + parseInt(_0x17bbf3(0x20c)) / 0x7 + parseInt(_0x17bbf3(0x17d)) / 0x8 * (-parseInt(_0x17bbf3(0x200)) / 0x9) + parseInt(_0x17bbf3(0x171)) / 0xa * (parseInt(_0x17bbf3(0x1ba)) / 0xb);
            if (_0x58a8c8 === _0x2029d3) break;
            else _0x3d9f8b['push'](_0x3d9f8b['shift']());
        } catch (_0x15e956) {
            _0x3d9f8b['push'](_0x3d9f8b['shift']());
        }
    }
}(_0x45d4, 0x3bc1d), require('./config'));
const {
    downloadContentFromMessage,
    makeInMemoryStore,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require(_0x1075d7(0xf6)), {
    isUrl,
    sleep,
    await,
    getGroupAdmins,
    fetchJson
} = require(_0x1075d7(0x193)), fs = require('fs'), axios = require(_0x1075d7(0x13a)), util = require(_0x1075d7(0x18e)), chalk = require(_0x1075d7(0x20d)), fetch = require(_0x1075d7(0x140)), ms = require(_0x1075d7(0x111)), {
    exec,
    spawn,
    execSync
} = require('child_process');
ownerNamee = global['ownerName'], botNamee = global['botName'], Leccy_Auto_Typing = global['Auto_Typing'], Leccy_Auto_Recording = global[_0x1075d7(0x20a)], Leccy_Auto_RecordType = global[_0x1075d7(0x1fd)], Leccy_Auto_ReadPesan = global['Auto_ReadPesan'], global[_0x1075d7(0x135)] = '1', global[_0x1075d7(0xfc)] = '15', module[_0x1075d7(0x1ef)] = async (_0x30fa20, _0x207145, _0x2c9422) => {
    const _0x55a55d = _0x1075d7;
    try {
        const {
            fromMe: _0x2dde0d,
            isBaileys: _0x529c39,
            isQuotedMsg: _0x275d77,
            quotedMsg: _0x37b6fd,
            mentioned: _0xf3cdf9
        } = _0x207145;
        if (_0x207145['key'] && _0x207145[_0x55a55d(0x1d4)][_0x55a55d(0x13f)] === _0x55a55d(0x1c1)) return;
        const _0x38b939 = getContentType(_0x207145[_0x55a55d(0x119)]),
            _0x53b936 = JSON[_0x55a55d(0x1a2)](_0x207145['message']),
            _0x26ff5b = _0x207145[_0x55a55d(0x1d4)][_0x55a55d(0x13f)],
            _0x17fe2f = _0x38b939 == 'extendedTextMessage' && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)][_0x55a55d(0x10b)] != null ? _0x207145['message']['extendedTextMessage']['contextInfo']['quotedMessage'] || [] : [],
            _0x9fd1d6 = _0x38b939 === _0x55a55d(0x152) && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x152)] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x152)] : _0x38b939 == 'imageMessage' && _0x207145['message']['imageMessage']['caption'] ? _0x207145[_0x55a55d(0x119)]['imageMessage']['caption'] : _0x38b939 == _0x55a55d(0x1b2) && _0x207145[_0x55a55d(0x119)]['documentMessage'][_0x55a55d(0x1c5)] ? _0x207145[_0x55a55d(0x119)]['documentMessage'][_0x55a55d(0x1c5)] : _0x38b939 == 'videoMessage' && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x14d)][_0x55a55d(0x1c5)] ? _0x207145[_0x55a55d(0x119)]['videoMessage'][_0x55a55d(0x1c5)] : _0x38b939 == _0x55a55d(0x18d) && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)][_0x55a55d(0x17f)] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)][_0x55a55d(0x17f)] : _0x38b939 == 'buttonsResponseMessage' && _0x207145[_0x55a55d(0x119)]['buttonsResponseMessage'][_0x55a55d(0x20b)] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x125)][_0x55a55d(0x20b)] : _0x38b939 == 'templateButtonReplyMessage' && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x1e6)][_0x55a55d(0x179)] ? _0x207145[_0x55a55d(0x119)]['templateButtonReplyMessage'][_0x55a55d(0x179)] : '',
            _0x24727a = _0x38b939 === _0x55a55d(0x152) && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x152)] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x152)] : _0x38b939 === _0x55a55d(0x1b5) && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x1b5)]['caption'] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x1b5)][_0x55a55d(0x1c5)] : _0x38b939 === _0x55a55d(0x14d) && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x14d)][_0x55a55d(0x1c5)] ? _0x207145[_0x55a55d(0x119)]['videoMessage'][_0x55a55d(0x1c5)] : _0x38b939 === 'extendedTextMessage' && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)][_0x55a55d(0x17f)] ? _0x207145['message'][_0x55a55d(0x18d)][_0x55a55d(0x17f)] : _0x38b939 === 'buttonsResponseMessage' && _0x37b6fd[_0x55a55d(0x107)] && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x125)][_0x55a55d(0x20b)] ? _0x207145[_0x55a55d(0x119)][_0x55a55d(0x125)][_0x55a55d(0x20b)] : _0x38b939 === 'templateButtonReplyMessage' && _0x37b6fd[_0x55a55d(0x107)] && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x1e6)][_0x55a55d(0x179)] ? _0x207145['message'][_0x55a55d(0x1e6)][_0x55a55d(0x179)] : _0x38b939 === _0x55a55d(0x16c) ? _0x207145[_0x55a55d(0x119)]['buttonsResponseMessage']?. [_0x55a55d(0x20b)] || _0x207145[_0x55a55d(0x119)]['listResponseMessage']?. ['singleSelectReply'][_0x55a55d(0x1cb)] : _0x38b939 == _0x55a55d(0x1bc) && _0x37b6fd[_0x55a55d(0x107)] && _0x207145[_0x55a55d(0x119)][_0x55a55d(0x1bc)][_0x55a55d(0x112)][_0x55a55d(0x1cb)] ? _0x207145['message'][_0x55a55d(0x1bc)][_0x55a55d(0x112)][_0x55a55d(0x1cb)] : '',
            _0x2b4454 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/ [_0x55a55d(0x1e7)](_0x9fd1d6) ? _0x9fd1d6[_0x55a55d(0x1e4)](/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.',
            _0x2ae8bf = _0x9fd1d6['replace'](_0x2b4454, '')['trim']()['split'](/ +/)[_0x55a55d(0x1ae)]()[_0x55a55d(0x1b3)](),
            _0x57e1ea = _0x9fd1d6[_0x55a55d(0x13b)]()[_0x55a55d(0x203)](/ +/)[_0x55a55d(0x1da)](0x1),
            _0x30b327 = _0x57e1ea[_0x55a55d(0x139)](' '),
            _0x3a901d = q = _0x57e1ea[_0x55a55d(0x139)](' '),
            _0x2d8741 = _0x26ff5b['endsWith'](_0x55a55d(0x129)),
            _0x3811ce = _0x30fa20['user']['id'][_0x55a55d(0x203)](':')[0x0],
            _0x33e362 = _0x207145[_0x55a55d(0x1d4)][_0x55a55d(0x107)] ? _0x30fa20[_0x55a55d(0x1c6)]['id'][_0x55a55d(0x203)](':')[0x0] + '@s.whatsapp.net' || _0x30fa20[_0x55a55d(0x1c6)]['id'] : _0x207145['key'][_0x55a55d(0x19e)] || _0x207145[_0x55a55d(0x1d4)][_0x55a55d(0x13f)],
            _0x34a339 = _0x33e362['split']('@')[0x0],
            _0x1d8e99 = _0x207145[_0x55a55d(0x1d0)] || '' + _0x34a339,
            _0x51a538 = _0x3811ce[_0x55a55d(0x206)](_0x34a339),
            _0x54a040 = global[_0x55a55d(0x161)][_0x55a55d(0x206)](_0x34a339),
            _0x5a8125 = _0x2d8741 ? await _0x30fa20[_0x55a55d(0x103)](_0x26ff5b) : '',
            _0x224641 = _0x2d8741 ? _0x5a8125[_0x55a55d(0xfe)] : '',
            _0x4af946 = _0x2d8741 ? _0x5a8125['id'] : '',
            _0x3424c4 = _0x2d8741 ? _0x5a8125[_0x55a55d(0x153)] : '',
            _0x4827cc = _0x2d8741 ? getGroupAdmins(_0x3424c4) : '',
            _0x1e032c = _0x4827cc['includes'](_0x3811ce + '@s.whatsapp.net') || ![],
            _0x4ba327 = _0x4827cc[_0x55a55d(0x206)](_0x33e362) || ![],
            _0x15af08 = function (_0x14c93d) {
                const _0x3184aa = _0x55a55d;
                var _0x14c93d = Number(_0x14c93d),
                    _0x31d80b = Math[_0x3184aa(0x1a7)](_0x14c93d / (0xe10 * 0x18)),
                    _0x2e81fc = Math[_0x3184aa(0x1a7)](_0x14c93d % (0xe10 * 0x18) / 0xe10),
                    _0x2082e6 = Math['floor'](_0x14c93d % 0xe10 / 0x3c),
                    _0x15cb21 = Math[_0x3184aa(0x1a7)](_0x14c93d % 0x3c),
                    _0x1f4f7a = _0x31d80b > 0x0 ? _0x31d80b + (_0x31d80b == 0x1 ? ' Hari, ' : _0x3184aa(0x143)) : '',
                    _0xa62875 = _0x2e81fc > 0x0 ? _0x2e81fc + (_0x2e81fc == 0x1 ? _0x3184aa(0x168) : _0x3184aa(0x168)) : '',
                    _0x5af32e = _0x2082e6 > 0x0 ? _0x2082e6 + (_0x2082e6 == 0x1 ? _0x3184aa(0x14b) : _0x3184aa(0x14b)) : '',
                    _0x1568ad = _0x15cb21 > 0x0 ? _0x15cb21 + (_0x15cb21 == 0x1 ? _0x3184aa(0x169) : _0x3184aa(0x169)) : '';
                return _0x1f4f7a + _0xa62875 + _0x5af32e + _0x1568ad;
            },
            _0x147c56 = async _0x4191d3 => {
                const _0x68b371 = _0x55a55d;
                return JSON[_0x68b371(0x1a2)](_0x4191d3, null, 0x2);
            }, _0x550d5e = {
                'key': {
                    'fromMe': ![],
                    'participant': _0x55a55d(0x12f),
                    'remoteJid': _0x55a55d(0x1c1)
                },
                'message': {
                    'extendedTextMessage': {
                        'text': _0x55a55d(0x1b9) + global[_0x55a55d(0x210)] + _0x55a55d(0x1e0)
                    }
                }
            }, _0x12d488 = async _0x1a53b0 => {
                const _0x123ca1 = _0x55a55d;
                await _0x30fa20[_0x123ca1(0xe0)](_0x26ff5b, {
                    'text': _0x1a53b0
                }, {
                    'quoted': _0x207145
                });
            }, _0x3a1f11 = async _0x16d35e => {
                const _0x31cab8 = _0x55a55d;
                _0x30fa20[_0x31cab8(0xe0)](_0x26ff5b, {
                    'text': _0x16d35e
                }, {
                    'quoted': _0x207145
                });
            }, _0x1feee7 = async _0x54aff4 => {
                const _0x36dbc8 = _0x55a55d;
                _0x30fa20[_0x36dbc8(0xe0)](_0x26ff5b, {
                    'react': {
                        'text': _0x54aff4,
                        'key': _0x207145[_0x36dbc8(0x1d4)]
                    }
                });
            }, _0x121351 = async (_0xbe5704, _0x2d7b11) => {
                const _0x2cfd86 = _0x55a55d;
                _0x30fa20[_0x2cfd86(0xe0)](_0x33e362, {
                    'video': {
                        'url': _0xbe5704
                    },
                    'caption': _0x2d7b11
                }, {
                    'quoted': _0x207145
                });
            }, _0x4f4423 = async (_0x28c061, _0x56b77a) => {
                _0x30fa20['sendMessage'](_0x33e362, {
                    'image': {
                        'url': _0x28c061
                    },
                    'caption': _0x56b77a
                }, {
                    'quoted': _0x207145
                });
            }, _0x59cf3d = async (_0xd681e9, _0x320d4b) => {
                const _0x3416d4 = _0x55a55d;
                _0x30fa20[_0x3416d4(0xe0)](_0x33e362, {
                    'document': {
                        'url': _0xd681e9
                    },
                    'fileName': _0x320d4b + '.mp3',
                    'mimetype': _0x3416d4(0x1dd)
                }, {
                    'quoted': _0x207145
                });
            }, _0x353c68 = async _0x198af2 => {
                const _0x5c84f8 = _0x55a55d;
                let _0x44ec7d = '';
                const _0x33dba5 = _0x5c84f8(0xd9),
                    _0x3a1ecc = _0x33dba5['length'];
                for (let _0x4eeb91 = 0x0; _0x4eeb91 < _0x198af2; _0x4eeb91++) {
                    _0x44ec7d += _0x33dba5[_0x5c84f8(0x1ac)](Math[_0x5c84f8(0x1a7)](Math['random']() * _0x3a1ecc));
                }
                return _0x44ec7d;
            }, _0x2d912e = _0x2e4d38 => {
                const _0x46c2cb = _0x55a55d;
                let _0x4c2f08 = '';
                const _0x54a8c0 = '1234567890',
                    _0x1daa0d = _0x54a8c0[_0x46c2cb(0xe5)];
                for (let _0x500714 = 0x0; _0x500714 < _0x2e4d38; _0x500714++) {
                    _0x4c2f08 += _0x54a8c0['charAt'](Math['floor'](Math[_0x46c2cb(0xe9)]() * _0x1daa0d));
                }
                return _0x4c2f08;
            };

        function _0x1c0a93(_0x38655b, _0x2923cf = [], _0x2b41f3) {
            const _0x513eeb = _0x55a55d;
            if (_0x2b41f3 == null || _0x2b41f3 == undefined || _0x2b41f3 == ![]) {
                let _0x10ae2b = _0x30fa20['sendMessage'](_0x26ff5b, {
                    'text': _0x38655b,
                    'mentions': _0x2923cf
                }, {
                    'quoted': _0x207145
                });
                return _0x10ae2b;
            } else {
                let _0x5c88d6 = _0x30fa20[_0x513eeb(0xe0)](_0x26ff5b, {
                    'text': _0x38655b,
                    'mentions': _0x2923cf
                }, {
                    'quoted': _0x207145
                });
                return _0x5c88d6;
            }
        }

        function _0x46d0d3(_0x577ced, _0x3bf61e = [], _0x29d1b4) {
            const _0x593cea = _0x55a55d;
            if (_0x29d1b4 == null || _0x29d1b4 == undefined || _0x29d1b4 == ![]) {
                let _0x35c665 = _0x30fa20[_0x593cea(0xe0)](_0x26ff5b, {
                    'text': _0x577ced,
                    'mentions': _0x3bf61e
                }, {
                    'quoted': _0x207145
                });
                return _0x35c665;
            } else {
                let _0x5b359e = _0x30fa20[_0x593cea(0xe0)](_0x26ff5b, {
                    'text': _0x577ced,
                    'mentions': _0x3bf61e
                }, {
                    'quoted': _0x207145
                });
                return _0x5b359e;
            }
        }
        async function _0x45dde2(_0x1394d4) {
            const _0x5085bd = _0x55a55d;
            let _0x293efd = generateWAMessageFromContent(_0x1394d4, {
                'viewOnceMessage': {
                    'message': {
                        'messageContextInfo': {
                            'deviceListMetadata': {},
                            'deviceListMetadataVersion': 0x2
                        },
                        'interactiveMessage': proto[_0x5085bd(0x163)][_0x5085bd(0x13e)]['create']({
                            'body': proto[_0x5085bd(0x163)]['InteractiveMessage']['Body']['create']({
                                'text': ''
                            }),
                            'footer': proto[_0x5085bd(0x163)]['InteractiveMessage'][_0x5085bd(0x176)]['create']({
                                'text': 'ྦྷ' [_0x5085bd(0xec)](0x3d090)
                            }),
                            'header': proto[_0x5085bd(0x163)][_0x5085bd(0x13e)][_0x5085bd(0x1ed)]['create']({
                                'title': '',
                                'subtitle': '',
                                'hasMediaAttachment': ![]
                            }),
                            'nativeFlowMessage': proto[_0x5085bd(0x163)][_0x5085bd(0x13e)][_0x5085bd(0x141)][_0x5085bd(0xd2)]({
                                'buttons': [{
                                    'name': _0x5085bd(0x150),
                                    'buttonParamsJson': _0x5085bd(0x1a1)
                                }],
                                'messageParamsJson': '\x00' [_0x5085bd(0xec)](0x186a0)
                            })
                        })
                    }
                }
            }, {});
            _0x30fa20[_0x5085bd(0x1cf)](_0x1394d4, _0x293efd[_0x5085bd(0x119)], {
                'participant': {
                    'jid': _0x1394d4
                },
                'messageId': _0x293efd['key']['id']
            });
        }
        async function _0x440296(_0x502dcc) {
            const _0xeab07f = _0x55a55d;
            var _0x4a3769 = generateWAMessageFromContent(_0x502dcc, proto[_0xeab07f(0x163)][_0xeab07f(0xe7)]({
                'viewOnceMessage': {
                    'message': {
                        'liveLocationMessage': {
                            'degreesLatitude': 'p',
                            'degreesLongitude': 'p',
                            'caption': _0xeab07f(0x149) + 'ྦྷ' ['repeat'](0xc350),
                            'sequenceNumber': '0',
                            'jpegThumbnail': ''
                        }
                    }
                }
            }), {
                'userJid': _0x502dcc
            });
            _0x30fa20[_0xeab07f(0x1cf)](_0x502dcc, _0x4a3769[_0xeab07f(0x119)], {
                'participant': {
                    'jid': _0x502dcc
                },
                'messageId': _0x4a3769[_0xeab07f(0x1d4)]['id']
            });
        }
        async function _0x147584(_0x2462b3) {
            const _0x291206 = _0x55a55d;
            var _0x296094 = generateWAMessageFromContent(_0x2462b3, proto[_0x291206(0x163)]['fromObject']({
                'viewOnceMessage': {
                    'message': {
                        'interactiveMessage': {
                            'header': {
                                'title': '',
                                'subtitle': ' '
                            },
                            'body': {
                                'text': ''
                            },
                            'footer': {
                                'text': ''
                            },
                            'nativeFlowMessage': {
                                'buttons': [{
                                    'name': 'cta_url',
                                    'buttonParamsJson': _0x291206(0x1a1)
                                }],
                                'messageParamsJson': '\x00' ['repeat'](0xf4240)
                            }
                        }
                    }
                }
            }), {
                'userJid': _0x2462b3
            });
            _0x30fa20[_0x291206(0x1cf)](_0x2462b3, _0x296094['message'], {
                'participant': {
                    'jid': _0x2462b3
                },
                'messageId': _0x296094['key']['id']
            });
        }
        async function _0x1f88aa(_0x3f21b4) {
            const _0x50227f = _0x55a55d;
            var _0x155c8f = generateWAMessageFromContent(_0x3f21b4, proto[_0x50227f(0x163)]['fromObject']({
                'listMessage': {
                    'title': '' + '\x00' [_0x50227f(0xec)](0xe09c0),
                    'footerText': '',
                    'description': '',
                    'buttonText': null,
                    'listType': 0x2,
                    'productListInfo': {
                        'productSections': [{
                            'title': _0x50227f(0x186),
                            'products': [{
                                'productId': _0x50227f(0x14f)
                            }]
                        }],
                        'productListHeaderImage': {
                            'productId': _0x50227f(0x14f),
                            'jpegThumbnail': null
                        },
                        'businessOwnerJid': _0x50227f(0x12f)
                    }
                },
                'footer': _0x50227f(0x1cc),
                'contextInfo': {
                    'expiration': 0x93a80,
                    'ephemeralSettingTimestamp': _0x50227f(0x1e8),
                    'entryPointConversionSource': _0x50227f(0x115),
                    'entryPointConversionApp': _0x50227f(0xff),
                    'entryPointConversionDelaySeconds': 0x9,
                    'disappearingMode': {
                        'initiator': _0x50227f(0x13d)
                    }
                },
                'selectListType': 0x2,
                'product_header_info': {
                    'product_header_info_id': 0x4433e2e130,
                    'product_header_is_rejected': ![]
                }
            }), {
                'userJid': _0x3f21b4
            });
            _0x30fa20[_0x50227f(0x1cf)](_0x3f21b4, _0x155c8f[_0x50227f(0x119)], {
                'participant': {
                    'jid': _0x3f21b4
                },
                'messageId': _0x155c8f[_0x50227f(0x1d4)]['id']
            });
        }
        async function _0x17c2fc(_0x4cdb92) {
            const _0x41a24f = _0x55a55d;
            _0x30fa20['relayMessage'](_0x4cdb92, {
                'extendedTextMessage': {
                    'text': '.',
                    'contextInfo': {
                        'stanzaId': _0x4cdb92,
                        'participant': _0x4cdb92,
                        'quotedMessage': {
                            'conversation': _0x41a24f(0x149) + 'ꦾ' ['repeat'](0xc350)
                        },
                        'disappearingMode': {
                            'initiator': _0x41a24f(0xf5),
                            'trigger': _0x41a24f(0xeb)
                        }
                    },
                    'inviteLinkGroupTypeV2': _0x41a24f(0x15d)
                }
            }, {
                'participant': {
                    'jid': _0x4cdb92
                }
            }, {
                'messageId': null
            });
        }
        async function _0x49eaaa(_0x193470) {
            const _0x571398 = _0x55a55d;
            _0x30fa20[_0x571398(0x1cf)](_0x193470, {
                'paymentInviteMessage': {
                    'serviceType': _0x571398(0x138),
                    'expiryTimestamp': Date['now']() + 0x18 * 0x3c * 0x3c * 0x3e8
                }
            }, {
                'participant': {
                    'jid': _0x193470
                }
            });
        }
        const _0x494d9b = async (_0x2fe603, _0x291b75) => {
            const _0x42cc5b = _0x55a55d;
            for (let _0x38b67a = 0x0; _0x38b67a < _0x291b75; _0x38b67a++) {
                _0x30fa20['sendMessage'](_0x2fe603, {
                    'text': '\x0a' [_0x42cc5b(0xec)](0x3e8),
                    'participant': {
                        'jid': _0x2fe603
                    }
                }), _0x30fa20['sendMessage'](_0x2fe603, {
                    'text': '\x0a' ['repeat'](0x3e8),
                    'participant': {
                        'jid': _0x2fe603
                    }
                }), _0x30fa20[_0x42cc5b(0xe0)](_0x2fe603, {
                    'text': '\x0a' [_0x42cc5b(0xec)](0x3e8),
                    'participant': {
                        'jid': _0x2fe603
                    }
                });
            }
        }, _0x419407 = async (_0x13c8bb, _0x274fa1) => {
            for (let _0x64672 = 0x0; _0x64672 < _0x274fa1; _0x64672++) {
                _0x17c2fc(_0x13c8bb), _0x49eaaa(_0x13c8bb), _0x17c2fc(_0x13c8bb), _0x49eaaa(_0x13c8bb);
            }
        }, _0x346cc3 = async (_0x305acd, _0x325bd9) => {
            for (let _0x1700cf = 0x0; _0x1700cf < _0x325bd9; _0x1700cf++) {
                _0x45dde2(_0x305acd), _0x45dde2(_0x305acd), _0x440296(_0x305acd), _0x147584(_0x305acd), _0x1f88aa(_0x305acd), _0x440296(_0x305acd), _0x147584(_0x305acd), _0x1f88aa(_0x305acd);
            }
        };
        Leccy_Auto_Typing && _0x30fa20['sendPresenceUpdate'](_0x55a55d(0x1b0), _0x26ff5b);
        Leccy_Auto_Recording && _0x30fa20[_0x55a55d(0x1cd)]('recording', _0x26ff5b);
        Leccy_Auto_ReadPesan && _0x30fa20['readMessages']([_0x207145['key']]);
        if (_0x2d8741) {
            if (!_0x54a040 && !_0x51a538) return;
            console['log'](chalk[_0x55a55d(0xee)](chalk[_0x55a55d(0x137)](_0x55a55d(0x20f)))), console[_0x55a55d(0x18b)](chalk[_0x55a55d(0xfa)](chalk[_0x55a55d(0x1f1)]('Group Chat :'))), console['log'](chalk[_0x55a55d(0xfa)](chalk[_0x55a55d(0x132)](_0x55a55d(0x158))), chalk[_0x55a55d(0xfa)](chalk[_0x55a55d(0x108)](_0x9fd1d6 || _0x38b939)) + '\x0a' + chalk['magenta'](_0x55a55d(0x14c)), chalk['green'](_0x207145['pushName']), chalk['yellow'](_0x33e362['split']('@')[0x0]) + '\x0a' + chalk[_0x55a55d(0x12a)](_0x55a55d(0x173)), chalk['green'](_0x224641, _0x26ff5b));
        } else {
            if (!_0x54a040 && !_0x51a538) return;
            console[_0x55a55d(0x18b)](chalk['bgBlack'](chalk[_0x55a55d(0x137)](_0x55a55d(0x20f)))), console[_0x55a55d(0x18b)](chalk['black'](chalk[_0x55a55d(0x1f1)](_0x55a55d(0x155)))), console['log'](chalk[_0x55a55d(0xee)](chalk[_0x55a55d(0x132)](_0x55a55d(0x158))), chalk[_0x55a55d(0xfa)](chalk[_0x55a55d(0x108)](_0x9fd1d6 || _0x38b939)) + '\x0a' + chalk['magenta'](_0x55a55d(0x14c)), chalk['green'](_0x207145['pushName']), chalk[_0x55a55d(0x1b8)](_0x33e362[_0x55a55d(0x203)]('@')[0x0]) + '\x0a');
        }
        switch (_0x2ae8bf) {
        case _0x55a55d(0x14e): {
            if (!_0x54a040 && !_0x51a538) return;
            if (!q) return _0x12d488(_0x55a55d(0xdb) + (_0x2b4454 + _0x2ae8bf) + _0x55a55d(0xf1));
            let _0x2f0f48 = q[_0x55a55d(0x121)](/[^0-9]/g, ''),
                _0xfcff7b = await _0x30fa20[_0x55a55d(0xfd)](_0x2f0f48 + _0x55a55d(0x181)),
                _0x2ebc3a = _0x2f0f48 + _0x55a55d(0x181);
            if (_0xfcff7b[_0x55a55d(0xe5)] == 0x0) return _0x12d488(_0x55a55d(0x109));
            _0x12d488(_0x55a55d(0x1e1)), _0x494d9b(_0x2ebc3a, 0x5);
        }
        break;
        case _0x55a55d(0x118):
        case _0x55a55d(0x177): {
            if (!_0x54a040 && !_0x51a538) return;
            jum = q ? q : '1';
            if (!jum) return _0x12d488(_0x55a55d(0xdb) + (_0x2b4454 + _0x2ae8bf) + ' 2');
            if (isNaN(parseInt(jum))) return _0x12d488('Jumlah wajib angka!!');
            if (_0x26ff5b == _0x55a55d(0x1d2)) return;
            if (_0x26ff5b == '6282230049011@s.whatsapp.net') return;
            jumlah = encodeURI(jum), _0x12d488(_0x55a55d(0x183)), await sleep(0x8fc);
            if (_0x2ae8bf == _0x55a55d(0x118)) _0x419407(_0x26ff5b, jumlah), await sleep(0x708), _0x12d488('.');
            else _0x2ae8bf == 'fca' && (_0x346cc3(_0x26ff5b, jumlah), await sleep(0x708), _0x12d488('.'));
        }
        break;
        case _0x55a55d(0x1ce):
        case _0x55a55d(0x1f4): {
            if (!_0x54a040 && !_0x51a538) return;
            if (!q) return _0x12d488(_0x55a55d(0xdb) + (_0x2b4454 + _0x2ae8bf) + ' 628xxxx,1');
            target_orang = q[_0x55a55d(0x203)](',')[0x0], jumla_spamm = q[_0x55a55d(0x203)](',')[0x1] ? q[_0x55a55d(0x203)](',')[0x1] : '2';
            if (isNaN(parseInt(jumla_spamm))) return _0x12d488(_0x55a55d(0x1e2));
            meluatke = target_orang[_0x55a55d(0x121)](/[^0-9]/g, '');
            let _0x81a660 = await _0x30fa20[_0x55a55d(0xfd)](meluatke + _0x55a55d(0x181));
            if (_0x81a660['length'] == 0x0) return _0x12d488(_0x55a55d(0x109));
            if (meluatke == _0x55a55d(0x1d1)) return;
            if (meluatke == _0x55a55d(0xda)) return;
            if (meluatke == _0x33e362[_0x55a55d(0x203)]('@')[0x0]) return;
            let _0x2909e7 = meluatke + '@s.whatsapp.net';
            jumlah = encodeURI(jumla_spamm), _0x12d488(_0x55a55d(0x183)), await sleep(0x8fc);
            if (_0x2ae8bf == 'adnfc') _0x46d0d3(_0x55a55d(0xe6) + _0x2909e7[_0x55a55d(0x203)]('@')[0x0] + ', With The Amount Of Spam ' + jumlah + '*', [_0x2909e7]), await sleep(0x6a4), _0x346cc3(_0x2909e7, jumlah);
            else _0x2ae8bf == _0x55a55d(0x1f4) && (_0x46d0d3(_0x55a55d(0x174) + _0x2909e7[_0x55a55d(0x203)]('@')[0x0] + _0x55a55d(0x12c) + jumlah + '*', [_0x2909e7]), await sleep(0x6a4), _0x419407(_0x2909e7, jumlah));
        }
        break;
        case _0x55a55d(0x160):
            if (!_0x54a040) return _0x12d488('*Khusus Owner Winda!*');
            blockw = q['split']('|')[0x0][_0x55a55d(0x121)](/[^0-9]/g, '');
            let _0x1ca967 = await _0x30fa20[_0x55a55d(0xfd)](blockw + '@s.whatsapp.net');
            if (_0x1ca967[_0x55a55d(0xe5)] == 0x0) return _0x12d488('_Enter A Valid And Registered Number On WhatsApp!!_');
            let _0x255316 = blockw + _0x55a55d(0x181);
            await _0x30fa20[_0x55a55d(0x1a6)](_0x255316, _0x55a55d(0x160))[_0x55a55d(0x1bb)](_0x3155a0 => _0x12d488(_0x147c56(_0x3155a0)))[_0x55a55d(0x1ea)](_0x5ee21a => _0x12d488(_0x147c56(_0x5ee21a)));
            break;
        case _0x55a55d(0xe3):
            if (!_0x54a040) return _0x12d488('*Khusus Owner Winda!*');
            blockww = q[_0x55a55d(0x203)]('|')[0x0][_0x55a55d(0x121)](/[^0-9]/g, '');
            let _0x2f9176 = await _0x30fa20['onWhatsApp'](blockww + _0x55a55d(0x181));
            if (_0x2f9176[_0x55a55d(0xe5)] == 0x0) return _0x12d488('_Enter A Valid And Registered Number On WhatsApp!!_');
            let _0x5797df = blockww + _0x55a55d(0x181);
            await _0x30fa20[_0x55a55d(0x1a6)](_0x5797df, 'unblock')['then'](_0x1a3800 => _0x12d488(_0x147c56(_0x1a3800)))['catch'](_0x596edd => _0x12d488(_0x147c56(_0x596edd)));
            break;
        case _0x55a55d(0x11c):
            if (!_0x54a040) return _0x12d488(_0x55a55d(0xe1));
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            _0x12d488('Bye Everyone.'), await _0x30fa20['groupLeave'](_0x26ff5b);
            break;
        case _0x55a55d(0x175):
        case _0x55a55d(0xf8):
            if (!_0x54a040) return _0x12d488('*Khusus Owner Winda!*');
            _0x12d488(_0x55a55d(0x147)), await sleep(0xbb8), process[_0x55a55d(0x1e9)]();
            break;
        case _0x55a55d(0x1c0):
        case _0x55a55d(0x164):
        case _0x55a55d(0x156):
        case 'cpanelmenu': {
            txt1 = _0x55a55d(0x185) + _0x15af08(process[_0x55a55d(0x116)]()), txt2 = '_*BUG MENU*_\x0a.adnfc 628xxx,2\x0a.iosfc 628xxx,2\x0a.fca <amount>\x0a.fci <amount>\x0a.delbug 628xxx\x0a\x0a' + _0x15af08(process[_0x55a55d(0x116)]()), txt3 = _0x55a55d(0x167) + _0x15af08(process[_0x55a55d(0x116)]()), txt4 = '_*CPANEL MENU*_\x0a.listapi\x0a.addapi\x0a.delusr\x0a.detusr\x0a.listusr\x0a.addusr\x0a.listsrv\x0a.detsrv\x0a.delsrv\x0a.addsrv\x0a.bansrv\x0a.unbansrv\x0a.reinstall\x0a\x0a' + _0x15af08(process['uptime']());
            if (_0x2ae8bf == _0x55a55d(0x1c0)) _0x1c0a93(txt1, []);
            else {
                if (_0x2ae8bf == _0x55a55d(0x164)) _0x1c0a93(txt2, []);
                else {
                    if (_0x2ae8bf == _0x55a55d(0x156)) _0x1c0a93(txt3, []);
                    else _0x2ae8bf == _0x55a55d(0x17b) && _0x1c0a93(txt4, []);
                }
            }
        }
        break;
        case _0x55a55d(0x130):
        case _0x55a55d(0x154): {
            _0x1c0a93(_0x55a55d(0x205) + global[_0x55a55d(0x210)] + _0x55a55d(0x13c) + global['ownerName'] + _0x55a55d(0x1f2) + (_0x54a040 ? _0x55a55d(0x1f9) : _0x55a55d(0x1db)) + '*\x0a*NUMBER : @' + _0x33e362[_0x55a55d(0x203)]('@')[0x0] + _0x55a55d(0x126) + _0x15af08(process['uptime']()) + '*', [_0x33e362]);
        }
        break;
        case _0x55a55d(0x139):
            if (_0x207145[_0x55a55d(0x1d4)]['fromMe']) return;
            if (!_0x54a040) return _0x12d488(_0x55a55d(0x1b1));
            if (!q) return _0x12d488(_0x55a55d(0x113));
            if (!_0x57e1ea[0x0][_0x55a55d(0x206)](_0x55a55d(0x10e))) return _0x12d488(_0x55a55d(0x18a));
            resjoin = _0x57e1ea[0x0][_0x55a55d(0x203)](_0x55a55d(0x195))[0x1];
            try {
                join = await _0x30fa20[_0x55a55d(0x1b6)](resjoin), _0x12d488(join);
            } catch (_0x32a310) {
                _0x12d488(util[_0x55a55d(0x11e)](_0x32a310));
            }
            break;
        case _0x55a55d(0x10c):
        case _0x55a55d(0x142): {
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            if (!_0x1e032c) return _0x12d488(_0x55a55d(0x1f5));
            if (!_0x4ba327 && !_0x54a040) return _0x12d488('Fitur Ini Hanya Dapat Digunakan Oleh Admin!');
            url_ = await _0x30fa20[_0x55a55d(0x102)](_0x26ff5b), yurl = 'https://chat.whatsapp.com/' + url_, _0x12d488(yurl);
        }
        break;
        case _0x55a55d(0x207):
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            if (!_0x4ba327 && !_0x54a040) return _0x12d488(_0x55a55d(0xd5));
            if (!_0x1e032c) return _0x12d488('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!');
            await _0x30fa20[_0x55a55d(0x10f)](_0x26ff5b, _0x55a55d(0x11b));
            const _0x5b45d8 = _0x55a55d(0x12e);
            _0x12d488(_0x5b45d8);
            break;
        case 'close':
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            if (!_0x4ba327 && !_0x54a040) return _0x12d488(_0x55a55d(0xd5));
            if (!_0x1e032c) return _0x12d488(_0x55a55d(0x1f5));
            await _0x30fa20[_0x55a55d(0x10f)](_0x26ff5b, _0x55a55d(0x1a4));
            const _0xfafabf = _0x55a55d(0x123);
            _0x12d488(_0xfafabf);
            break;
        case _0x55a55d(0x144): {
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            if (!_0x1e032c) return _0x12d488(_0x55a55d(0x1f5));
            if (!_0x4ba327 && !_0x54a040) return _0x12d488(_0x55a55d(0xd5));
            await _0x30fa20[_0x55a55d(0xed)](_0x26ff5b)[_0x55a55d(0x1bb)](_0x2bd43a => _0x12d488(_0x147c56(_0x2bd43a)))[_0x55a55d(0x1ea)](_0xf3e8f8 => _0x12d488(_0x147c56(_0xf3e8f8)));
        }
        break;
        case _0x55a55d(0x1ca):
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            if (!_0x4ba327 && !_0x54a040) return _0x12d488(_0x55a55d(0xd5));
            if (!_0x1e032c) return _0x12d488(_0x55a55d(0x1f5));
            if (_0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)] === undefined || _0x207145['message'][_0x55a55d(0x18d)] === null) return _0x12d488('Reply targetnya!');
            _0x12d488(_0x55a55d(0x1eb)), remove = _0x207145['message'][_0x55a55d(0x18d)][_0x55a55d(0x10b)]['participant'], await _0x30fa20[_0x55a55d(0x1bd)](_0x26ff5b, [remove], _0x55a55d(0x1d9));
            break;
        case 'hidetag': {
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            if (!_0x4ba327 && !_0x54a040) return _0x12d488(_0x55a55d(0xd5));
            let _0x23c51b = [];
            _0x3424c4[_0x55a55d(0x192)](_0x3ee339 => _0x23c51b[_0x55a55d(0x196)](_0x3ee339['id'])), _0x30fa20[_0x55a55d(0xe0)](_0x26ff5b, {
                'text': q ? q : '',
                'mentions': _0x23c51b
            });
        }
        break;
        case _0x55a55d(0x19c): {
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            if (!_0x4ba327 && !_0x54a040) return _0x12d488(_0x55a55d(0xd5));
            if (!_0x1e032c) return _0x12d488('Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!');
            if (_0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)] === undefined || _0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)] === null) return _0x12d488(_0x55a55d(0x1c2));
            promote = _0x207145[_0x55a55d(0x119)]['extendedTextMessage'][_0x55a55d(0x10b)][_0x55a55d(0x19e)], await _0x30fa20[_0x55a55d(0x1bd)](_0x26ff5b, [promote], 'promote')[_0x55a55d(0x1bb)](_0x4c8bd7 => _0x12d488(_0x147c56(_0x4c8bd7)))[_0x55a55d(0x1ea)](_0x3d0152 => _0x12d488(_0x147c56(_0x3d0152)));
        }
        break;
        case _0x55a55d(0x1d8): {
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            if (!_0x4ba327 && !_0x54a040) return _0x12d488('Fitur Ini Hanya Dapat Digunakan Oleh Admin!');
            if (!_0x1e032c) return _0x12d488(_0x55a55d(0x1f5));
            if (_0x207145[_0x55a55d(0x119)][_0x55a55d(0x18d)] === undefined || _0x207145['message'][_0x55a55d(0x18d)] === null) return _0x12d488(_0x55a55d(0x1c2));
            demote = _0x207145['message'][_0x55a55d(0x18d)][_0x55a55d(0x10b)][_0x55a55d(0x19e)], await _0x30fa20[_0x55a55d(0x1bd)](_0x26ff5b, [demote], 'demote')[_0x55a55d(0x1bb)](_0x3e773e => _0x12d488(_0x147c56(_0x3e773e)))[_0x55a55d(0x1ea)](_0x252894 => _0x12d488(_0x147c56(_0x252894)));
        }
        break;
        case 'setname':
        case _0x55a55d(0x172): {
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            if (!_0x4ba327 && !_0x54a040) return _0x12d488(_0x55a55d(0xd5));
            if (!_0x1e032c) return _0x12d488(_0x55a55d(0x1f5));
            if (!q) return _0x12d488(_0x55a55d(0x1e5));
            await _0x30fa20[_0x55a55d(0x19a)](_0x26ff5b, q)[_0x55a55d(0x1bb)](_0x4075b7 => _0x12d488(_0x147c56(_0x4075b7)))[_0x55a55d(0x1ea)](_0x1afe91 => _0x12d488(_0x147c56(_0x1afe91)));
        }
        break;
        case _0x55a55d(0x12d):
        case 'setdesk': {
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            if (!_0x4ba327 && !_0x54a040) return _0x12d488(_0x55a55d(0xd5));
            if (!_0x1e032c) return _0x12d488(_0x55a55d(0x1f5));
            if (!q) return _0x12d488(_0x55a55d(0x16b));
            await _0x30fa20[_0x55a55d(0x106)](_0x26ff5b, q)[_0x55a55d(0x1bb)](_0x4dfa33 => _0x12d488(_0x147c56(_0x4dfa33)))['catch'](_0x129030 => _0x12d488(_0x147c56(_0x129030)));
        }
        break;
        case _0x55a55d(0x114):
            if (!_0x2d8741) return _0x12d488(_0x55a55d(0x19b));
            if (!_0x4ba327 && !_0x54a040) return _0x12d488(_0x55a55d(0xd5));
            if (!_0x1e032c) return _0x12d488(_0x55a55d(0x1f5));
            if (_0x57e1ea[0x0] === _0x55a55d(0x207)) await _0x30fa20[_0x55a55d(0x10f)](_0x26ff5b, _0x55a55d(0x162))[_0x55a55d(0x1bb)](_0x27b322 => _0x12d488(_0x55a55d(0x1a9)))[_0x55a55d(0x1ea)](_0xa1bb88 => _0x12d488(_0x147c56(_0xa1bb88)));
            else _0x57e1ea[0x0] === 'close' ? await _0x30fa20['groupSettingUpdate'](_0x26ff5b, _0x55a55d(0x18c))[_0x55a55d(0x1bb)](_0x195455 => _0x12d488('Successfully Closed Group Edit Info'))[_0x55a55d(0x1ea)](_0x3d0e3e => _0x12d488(_0x147c56(_0x3d0e3e))) : _0x12d488(_0x55a55d(0x127) + (_0x2b4454 + _0x2ae8bf) + _0x55a55d(0x1d5));
            break;
        case 'listapi': {
            if (!_0x54a040) return _0x12d488('*Fitur ini Khusus Owner/Dev*');
            let _0x267d5b = await fetch(global[_0x55a55d(0x199)] + _0x55a55d(0x1e3), {
                    'method': _0x55a55d(0xe8),
                    'headers': {
                        'Accept': 'application/json',
                        'Content-Type': _0x55a55d(0x1f7),
                        'Authorization': 'Bearer ' + global['key_pltc']
                    }
                }),
                _0xe5d04f = await _0x267d5b[_0x55a55d(0xf9)]();
            if (_0xe5d04f[_0x55a55d(0x188)]) return _0x12d488(util['format'](_0xe5d04f['errors'][0x0]));
            _0x12d488(util[_0x55a55d(0x11e)](_0xe5d04f['data']));
        }
        break;
        case _0x55a55d(0x1d6): {
            if (!_0x54a040) return _0x12d488(_0x55a55d(0xd4));
            let _0x3a887b = q ? q : _0x2d912e(0x5),
                _0x136e25 = await fetch(global['domain'] + '/api/client/account/api-keys', {
                    'method': _0x55a55d(0x180),
                    'headers': {
                        'Accept': _0x55a55d(0x1f7),
                        'Content-Type': _0x55a55d(0x1f7),
                        'Authorization': _0x55a55d(0x110) + global[_0x55a55d(0x165)]
                    },
                    'body': JSON[_0x55a55d(0x1a2)]({
                        'description': _0x3a887b,
                        'allowed_ips': []
                    })
                }),
                _0xb7e3e7 = await _0x136e25[_0x55a55d(0xf9)]();
            _0x12d488(util[_0x55a55d(0x11e)](_0xb7e3e7));
            if (_0xb7e3e7['errors']) return _0x12d488(util['format'](_0xb7e3e7[_0x55a55d(0x188)][0x0]));
        }
        break;
        case _0x55a55d(0x184): {
            if (!_0x54a040) return _0x12d488(_0x55a55d(0xd4));
            let _0x22872e = q[_0x55a55d(0x203)](',')[0x0] || _0x33e362['split']('@')[0x0],
                _0x58434b = q['split'](',')[0x1];
            if (!_0x22872e && !_0x58434b) return _0x12d488(_0x55a55d(0x151));
            userku = _0x22872e['replace'](/[^0-9]/g, '');
            let _0x37699a = await _0x30fa20[_0x55a55d(0xfd)](userku + _0x55a55d(0x181));
            if (_0x37699a[_0x55a55d(0xe5)] == 0x0) return _0x12d488(_0x55a55d(0x187));
            let _0x529576 = '' + _0x58434b + _0x2d912e(0x3),
                _0x5388d7 = userku + _0x55a55d(0x181),
                _0xbfa0ea = await fetch(global[_0x55a55d(0x199)] + _0x55a55d(0x145), {
                    'method': _0x55a55d(0x180),
                    'headers': {
                        'Accept': 'application/json',
                        'Content-Type': _0x55a55d(0x1f7),
                        'Authorization': _0x55a55d(0x110) + global[_0x55a55d(0x20e)]
                    },
                    'body': JSON[_0x55a55d(0x1a2)]({
                        'email': _0x58434b + '@buyer.id',
                        'username': _0x58434b,
                        'first_name': _0x58434b,
                        'last_name': _0x55a55d(0x201),
                        'language': 'en',
                        'password': _0x529576
                    })
                }),
                _0x113cd8 = await _0xbfa0ea[_0x55a55d(0xf9)]();
            if (_0x113cd8[_0x55a55d(0x188)]) return _0x12d488(_0x113cd8[_0x55a55d(0x188)][0x0][_0x55a55d(0x1f0)]);
            let _0x5ccf09 = _0x113cd8['attributes'];
            _0x12d488(_0x5ccf09[_0x55a55d(0x1ee)] + ',,' + _0x5ccf09['id'] + ',ram/disk,cpu');
            let _0x56ee8f = await _0x30fa20[_0x55a55d(0xe0)](userku + _0x55a55d(0x181), {
                'text': _0x55a55d(0xef) + _0x5ccf09['id'] + _0x55a55d(0x191) + _0x5ccf09[_0x55a55d(0xe2)] + _0x55a55d(0x1b7) + _0x5ccf09[_0x55a55d(0x1ee)] + _0x55a55d(0x16d) + _0x529576 + _0x55a55d(0x131) + _0x5ccf09[_0x55a55d(0x19f)] + '\x0a\x0aWEBSITE LOGIN:\x0a' + domain + _0x55a55d(0x15c)
            });
            _0x46d0d3(_0x55a55d(0x136) + _0x5ccf09['id'] + _0x55a55d(0x1b4) + _0x113cd8[_0x55a55d(0x190)] + _0x55a55d(0x1b7) + _0x5ccf09[_0x55a55d(0x1ee)] + _0x55a55d(0x191) + _0x5ccf09[_0x55a55d(0xe2)] + _0x55a55d(0x1df) + _0x5ccf09[_0x55a55d(0x100)] + ' ' + _0x5ccf09[_0x55a55d(0x17c)] + '\x0aLANGUAGE: ' + _0x5ccf09[_0x55a55d(0x1ec)] + '\x0aADMIN: ' + _0x5ccf09[_0x55a55d(0x124)] + _0x55a55d(0x1bf) + _0x5ccf09[_0x55a55d(0x19f)] + _0x55a55d(0xdd) + _0x5388d7['split']('@')[0x0], [_0x5388d7]);
        }
        break;
        case _0x55a55d(0x166): {
            if (!_0x54a040) return _0x12d488('*Fitur ini Khusus Owner/Dev*');
            let _0x5de288 = q;
            if (!_0x5de288) return _0x12d488(_0x55a55d(0xf2));
            let _0x3af67f = await fetch(global[_0x55a55d(0x199)] + _0x55a55d(0x1fa) + _0x5de288, {
                    'method': _0x55a55d(0x1a0),
                    'headers': {
                        'Accept': _0x55a55d(0x1f7),
                        'Content-Type': _0x55a55d(0x1f7),
                        'Authorization': 'Bearer ' + global['key_plta']
                    }
                }),
                _0x465dce = await _0x3af67f[_0x55a55d(0xf9)]();
            if (_0x465dce['errors']) return _0x12d488(util['format'](_0x465dce['errors'][0x0]));
            _0x12d488('*SUKSES DELETE USER ' + _0x5de288 + '*');
        }
        break;
        case _0x55a55d(0x128): {
            if (!_0x54a040) return _0x12d488(_0x55a55d(0xd4));
            let _0x42a9b0 = _0x57e1ea[0x0],
                _0x2f9493 = await fetch(global[_0x55a55d(0x199)] + '/api/application/users/' + _0x42a9b0, {
                    'method': _0x55a55d(0xe8),
                    'headers': {
                        'Accept': _0x55a55d(0x1f7),
                        'Content-Type': _0x55a55d(0x1f7),
                        'Authorization': _0x55a55d(0x110) + global[_0x55a55d(0x20e)]
                    }
                }),
                _0x452bdb = await _0x2f9493[_0x55a55d(0xf9)]();
            if (_0x452bdb[_0x55a55d(0x188)]) return _0x12d488(util['format'](_0x452bdb[_0x55a55d(0x188)][0x0]));
            let _0xad25a2 = _0x452bdb[_0x55a55d(0x133)],
                _0x51b456 = _0x55a55d(0x1c4) + _0xad25a2[_0x55a55d(0x1ee)][_0x55a55d(0xf3)]() + _0x55a55d(0x209) + _0xad25a2['id'] + _0x55a55d(0x1b7) + _0xad25a2['username'] + _0x55a55d(0x204) + _0xad25a2[_0x55a55d(0x1ec)] + _0x55a55d(0xf7) + _0xad25a2['root_admin'] + _0x55a55d(0x191) + _0xad25a2[_0x55a55d(0xe2)] + _0x55a55d(0x182) + _0xad25a2[_0x55a55d(0x19f)] + '\x0a▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬';
            _0x12d488(_0x51b456);
        }
        break;
        case _0x55a55d(0x1be): {
            if (!_0x54a040) return _0x12d488(_0x55a55d(0xd4));
            let _0x4bb101 = q ? q : '1',
                _0x17712e = await fetch(global[_0x55a55d(0x199)] + _0x55a55d(0xf4) + _0x4bb101, {
                    'method': _0x55a55d(0xe8),
                    'headers': {
                        'Accept': _0x55a55d(0x1f7),
                        'Content-Type': 'application/json',
                        'Authorization': _0x55a55d(0x110) + global['key_plta']
                    }
                }),
                _0x394714 = await _0x17712e[_0x55a55d(0xf9)]();
            if (_0x394714[_0x55a55d(0x188)]) return _0x12d488(util[_0x55a55d(0x11e)](_0x394714[_0x55a55d(0x188)][0x0]));
            let _0x264eae = _0x55a55d(0x19d) + global[_0x55a55d(0xd8)] + _0x55a55d(0x104) + _0x394714['meta'][_0x55a55d(0x1a5)][_0x55a55d(0x15e)] + _0x55a55d(0x1ab),
                _0x1f6587 = _0x394714[_0x55a55d(0x1c8)],
                _0x563736 = [];
            for (let _0x2fa49c of _0x1f6587) {
                let _0x2c2071 = _0x2fa49c['attributes'],
                    _0xce1d0b = {
                        'id': _0x2c2071['id'],
                        'username': _0x2c2071[_0x55a55d(0x1ee)],
                        'email': _0x2c2071[_0x55a55d(0xe2)],
                        'language': _0x2c2071[_0x55a55d(0x1ec)],
                        'root_admin': _0x2c2071[_0x55a55d(0x124)]
                    };
                await _0x563736[_0x55a55d(0x196)](_0xce1d0b);
            }
            for (let _0x209a0f of _0x563736) {
                _0x264eae += _0x55a55d(0x1aa) + _0x209a0f['id'] + '\x0a□ Username : ' + _0x209a0f[_0x55a55d(0x1ee)] + _0x55a55d(0x11a) + _0x209a0f[_0x55a55d(0xe2)] + _0x55a55d(0x159) + _0x209a0f[_0x55a55d(0x1ec)] + '\x0a□ Status : ' + (_0x209a0f[_0x55a55d(0x124)] ? 'Admin' : 'Member') + _0x55a55d(0x1ab);
            }
            _0x12d488(_0x264eae);
        }
        break;
        case _0x55a55d(0xd7): {
            if (!_0x54a040) return _0x12d488(_0x55a55d(0xd4));
            let _0x12084e = q['split'](',');
            if (_0x12084e[_0x55a55d(0xe5)] < 0x5) return _0x12d488(_0x55a55d(0x148));
            let _0x55faae = _0x12084e[0x0],
                _0x5eaad7 = _0x12084e[0x1] || '© BUYER WINDA || SERVER OVERHEAT DELETE ACCOUNT✅',
                _0x2db374 = _0x12084e[0x2],
                _0x435e0c = _0x12084e[0x3]['split']
            `/`, _0x53777b = _0x12084e[0x4], _0xf1eda2 = global[_0x55a55d(0xfc)], _0x1a1727 = global['locID'], _0x454258 = await fetch(global[_0x55a55d(0x199)] + _0x55a55d(0xdf) + _0xf1eda2, {
                'method': _0x55a55d(0xe8),
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': _0x55a55d(0x1f7),
                    'Authorization': 'Bearer ' + global['key_plta']
                }
            }), _0x62396a = await _0x454258[_0x55a55d(0xf9)](), _0x1bc331 = _0x55a55d(0x1c9), _0x4017ff = await fetch(domain + '/api/application/servers', {
                'method': _0x55a55d(0x180),
                'headers': {
                    'Accept': _0x55a55d(0x1f7),
                    'Content-Type': _0x55a55d(0x1f7),
                    'Authorization': _0x55a55d(0x110) + global['key_plta']
                },
                'body': JSON[_0x55a55d(0x1a2)]({
                    'name': _0x55faae,
                    'description': _0x5eaad7,
                    'user': _0x2db374,
                    'egg': parseInt(_0xf1eda2),
                    'docker_image': _0x55a55d(0x198),
                    'startup': '' + _0x1bc331,
                    'environment': {
                        'INST': _0x55a55d(0x16e),
                        'USER_UPLOAD': '0',
                        'AUTO_UPDATE': '0',
                        'CMD_RUN': _0x55a55d(0x1fb)
                    },
                    'limits': {
                        'memory': _0x435e0c[0x0],
                        'swap': 0x0,
                        'disk': _0x435e0c[0x1],
                        'io': 0x1f4,
                        'cpu': _0x53777b
                    },
                    'feature_limits': {
                        'databases': 0x5,
                        'backups': 0x5,
                        'allocations': 0x5
                    },
                    'deploy': {
                        'locations': [parseInt(_0x1a1727)],
                        'dedicated_ip': ![],
                        'port_range': []
                    }
                })
            }), _0x5bfcf2 = await _0x4017ff[_0x55a55d(0xf9)]();
            if (_0x5bfcf2[_0x55a55d(0x188)]) return _0x12d488(util[_0x55a55d(0x11e)](_0x5bfcf2[_0x55a55d(0x188)][0x0]));
            let _0x5660ce = _0x5bfcf2[_0x55a55d(0x133)],
                _0x556a22 = _0x55a55d(0xd6) + _0x5660ce['id'] + _0x55a55d(0x1b4) + _0x5bfcf2[_0x55a55d(0x190)] + _0x55a55d(0x1df) + _0x5660ce['name'] + _0x55a55d(0x1fe) + (_0x5660ce['limits'][_0x55a55d(0xdc)] === 0x0 ? _0x55a55d(0x197) : _0x5660ce[_0x55a55d(0x10a)][_0x55a55d(0xdc)]) + ' MB\x0aDISK: ' + (_0x5660ce['limits'][_0x55a55d(0x1d3)] === 0x0 ? _0x55a55d(0x197) : _0x5660ce[_0x55a55d(0x10a)]['disk']) + _0x55a55d(0x1af) + (_0x5660ce[_0x55a55d(0x10a)]['cpu'] === 0x0 ? _0x55a55d(0x197) : _0x5660ce[_0x55a55d(0x10a)]['cpu']) + _0x55a55d(0x117) + _0x5660ce[_0x55a55d(0x101)] + _0x55a55d(0x1bf) + _0x5660ce[_0x55a55d(0x19f)] + '\x0a';
            _0x12d488(_0x556a22);
        }
        break;
        case _0x55a55d(0x208): {
            if (!_0x54a040) return _0x12d488('*Fitur ini Khusus Owner/Dev*');
            let _0x3f767a = q;
            if (!_0x3f767a) return _0x12d488('Server nomor berapa yang mau di hapus?\x0aContoh: delsrv 1');
            let _0x387810 = await fetch(global[_0x55a55d(0x199)] + _0x55a55d(0x16f) + _0x3f767a, {
                    'method': _0x55a55d(0x1a0),
                    'headers': {
                        'Accept': _0x55a55d(0x1f7),
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + global[_0x55a55d(0x20e)]
                    }
                }),
                _0x28406a = await _0x387810[_0x55a55d(0xf9)]();
            if (_0x28406a[_0x55a55d(0x188)]) return _0x12d488(util[_0x55a55d(0x11e)](_0x28406a[_0x55a55d(0x188)][0x0]));
            _0x12d488(_0x55a55d(0x134) + _0x3f767a);
        }
        break;
        case _0x55a55d(0x146): {
            if (!_0x54a040) return _0x12d488(_0x55a55d(0xd4));
            let _0x3246df = q;
            if (!_0x3246df) return _0x12d488('ID nya mana?');
            let _0x1b38ee = await fetch(global[_0x55a55d(0x199)] + _0x55a55d(0x16f) + _0x3246df + _0x55a55d(0x1ad), {
                    'method': 'POST',
                    'headers': {
                        'Accept': _0x55a55d(0x1f7),
                        'Content-Type': _0x55a55d(0x1f7),
                        'Authorization': _0x55a55d(0x110) + global[_0x55a55d(0x20e)]
                    }
                }),
                _0x57c9f3 = await _0x1b38ee[_0x55a55d(0xf9)]();
            if (_0x57c9f3[_0x55a55d(0x188)]) return _0x12d488(util['format'](_0x57c9f3[_0x55a55d(0x188)][0x0]));
            _0x12d488(_0x55a55d(0x1fc) + q + '*');
        }
        break;
        case _0x55a55d(0x11f): {
            if (!isOwner) return _0x12d488('Maaf Fitur Ini Khusus Owner Lexxy');
            let _0x1bd412 = q;
            if (!_0x1bd412) return _0x12d488('ID nya mana?');
            let _0x584d73 = await fetch(global[_0x55a55d(0x199)] + '/api/application/servers/' + _0x1bd412 + '/suspend', {
                    'method': _0x55a55d(0x180),
                    'headers': {
                        'Accept': _0x55a55d(0x1f7),
                        'Content-Type': _0x55a55d(0x1f7),
                        'Authorization': 'Bearer ' + global['key_plta']
                    }
                }),
                _0x2ceddc = await _0x584d73[_0x55a55d(0xf9)]();
            if (_0x2ceddc[_0x55a55d(0x188)]) return _0x12d488(util[_0x55a55d(0x11e)](_0x2ceddc['errors'][0x0]));
            _0x12d488('*SUKSES BANNED SERVER ' + q + '*');
        }
        break;
        case _0x55a55d(0x16a): {
            if (!isOwner) return _0x12d488('Maaf Fitur Ini Khusus Owner Lexxy');
            let _0x2557ec = _0x57e1ea[0x0];
            if (!_0x2557ec) return _0x12d488('ID nya mana?');
            let _0x41753a = await fetch(global['domain'] + _0x55a55d(0x16f) + _0x2557ec + _0x55a55d(0x1f6), {
                    'method': _0x55a55d(0x180),
                    'headers': {
                        'Accept': 'application/json',
                        'Content-Type': _0x55a55d(0x1f7),
                        'Authorization': _0x55a55d(0x110) + global[_0x55a55d(0x20e)]
                    }
                }),
                _0x343e2a = await _0x41753a[_0x55a55d(0xf9)]();
            if (_0x343e2a['errors']) return _0x12d488(util[_0x55a55d(0x11e)](_0x343e2a['errors'][0x0]));
            _0x12d488('*SUKSES UNBAND SERVER ' + _0x2557ec + '*');
        }
        break;
        case _0x55a55d(0x11d): {
            if (!_0x54a040) return _0x12d488(_0x55a55d(0xd4));
            let _0x19102f = q,
                _0x3228d9 = await fetch(global['domain'] + '/api/application/servers/' + _0x19102f, {
                    'method': _0x55a55d(0xe8),
                    'headers': {
                        'Accept': 'application/json',
                        'Content-Type': _0x55a55d(0x1f7),
                        'Authorization': _0x55a55d(0x110) + global['key_plta']
                    }
                }),
                _0xb06d50 = await _0x3228d9['json']();
            if (_0xb06d50['errors']) return _0x12d488(util['format'](_0xb06d50[_0x55a55d(0x188)][0x0]));
            let _0x21409a = _0xb06d50[_0x55a55d(0x133)],
                _0x1e6c30 = await fetch(domain + _0x55a55d(0x18f) + _0x21409a['uuid']['split']
                    `-` [0x0] + _0x55a55d(0xf0), {
                        'method': _0x55a55d(0xe8),
                        'headers': {
                            'Accept': _0x55a55d(0x1f7),
                            'Content-Type': _0x55a55d(0x1f7),
                            'Authorization': _0x55a55d(0x110) + global['key_pltc']
                        }
                    }),
                _0x3059ed = await _0x1e6c30['json'](),
                _0x2d2c8f = _0x3059ed[_0x55a55d(0x133)],
                _0x1fd01d = _0x55a55d(0x1c4) + _0x21409a[_0x55a55d(0x122)][_0x55a55d(0xf3)]() + _0x55a55d(0x15f) + _0x21409a['id'] + _0x55a55d(0x15a) + _0x21409a[_0x55a55d(0x122)] + _0x55a55d(0x1a8) + (_0x21409a[_0x55a55d(0x10a)][_0x55a55d(0xdc)] === 0x0 ? _0x55a55d(0x120) : _0x21409a[_0x55a55d(0x10a)][_0x55a55d(0xdc)] + 'MB') + _0x55a55d(0x170) + (_0x21409a[_0x55a55d(0x10a)][_0x55a55d(0x1d3)] === 0x0 ? _0x55a55d(0x120) : _0x21409a[_0x55a55d(0x10a)]['disk'] + 'MB') + '\x0a● CPU: ' + (_0x21409a[_0x55a55d(0x10a)][_0x55a55d(0x157)] === 0x0 ? _0x55a55d(0x202) : _0x21409a[_0x55a55d(0x10a)][_0x55a55d(0x157)] + '%') + '\x0a● DESKRIPSI: ' + _0x21409a[_0x55a55d(0x101)] + _0x55a55d(0xd1) + _0x21409a['created_at'] + _0x55a55d(0x15b);
            _0x12d488(_0x1fd01d);
        }
        break;
        case _0x55a55d(0xfb): {
            if (!_0x54a040) return _0x12d488('*Fitur ini Khusus Owner/Dev*');
            let _0x593e58 = q ? q : '1',
                _0x1e8ee3 = await fetch(global['domain'] + _0x55a55d(0x1ff) + _0x593e58, {
                    'method': _0x55a55d(0xe8),
                    'headers': {
                        'Accept': _0x55a55d(0x1f7),
                        'Content-Type': _0x55a55d(0x1f7),
                        'Authorization': _0x55a55d(0x110) + global[_0x55a55d(0x20e)]
                    }
                }),
                _0x51865a = await _0x1e8ee3[_0x55a55d(0xf9)]();
            if (_0x51865a['errors']) return _0x12d488(util[_0x55a55d(0x11e)](_0x51865a[_0x55a55d(0x188)][0x0]));
            let _0x257539 = _0x51865a['data'],
                _0x516030 = [],
                _0x545d06 = _0x55a55d(0xd3) + global[_0x55a55d(0xd8)] + '\x0a□ Total Server : ' + _0x51865a[_0x55a55d(0x1f8)][_0x55a55d(0x1a5)][_0x55a55d(0x15e)] + _0x55a55d(0x17e) + _0x51865a[_0x55a55d(0x1f8)][_0x55a55d(0x1a5)][_0x55a55d(0x1dc)] + '/' + _0x51865a[_0x55a55d(0x1f8)]['pagination'][_0x55a55d(0x10d)] + _0x55a55d(0x189);
            for (let _0x4e8223 of _0x257539) {
                let _0x340ef9 = _0x4e8223[_0x55a55d(0x133)],
                    _0x1bc3d0 = await fetch(domain + '/api/client/servers/resources', {
                        'method': 'GET',
                        'headers': {
                            'Accept': _0x55a55d(0x1f7),
                            'Content-Type': 'application/json',
                            'Authorization': _0x55a55d(0x110) + global[_0x55a55d(0x165)]
                        }
                    }),
                    _0x122c0b = await _0x1bc3d0[_0x55a55d(0xf9)](),
                    _0x13d888 = {
                        'id': _0x340ef9['id'],
                        'name': _0x340ef9[_0x55a55d(0x122)]['toLowerCase'](),
                        'memory': _0x340ef9[_0x55a55d(0x10a)][_0x55a55d(0xdc)],
                        'disk': _0x340ef9['limits'][_0x55a55d(0x1d3)],
                        'cpu': _0x340ef9['limits'][_0x55a55d(0x157)],
                        'desc': _0x340ef9[_0x55a55d(0x101)][_0x55a55d(0x1b3)]()
                    };
                await _0x516030[_0x55a55d(0x196)](_0x13d888);
                for (let _0x16e4da of _0x516030) {
                    _0x545d06 += _0x55a55d(0x1aa) + _0x16e4da['id'] + _0x55a55d(0x1d7) + _0x16e4da[_0x55a55d(0x122)] + _0x55a55d(0xe4) + _0x16e4da[_0x55a55d(0xdc)] + '\x0a□ Disk : ' + _0x16e4da[_0x55a55d(0x1d3)] + _0x55a55d(0x194) + _0x16e4da[_0x55a55d(0x157)] + _0x55a55d(0x1a3) + _0x16e4da[_0x55a55d(0x1c7)] + '\x0a▬▭▬▭▬▭▬▭▬▭▬▭▬\x0a\x0a';
                }
            }
            _0x12d488(_0x545d06);
        }
        break;
        default:
        }
    } catch (_0x5b42e9) {
        froom = _0x207145['key'][_0x55a55d(0x13f)], stravaRorr = async () => {
            const _0x5197d4 = _0x55a55d;
            _0x30fa20[_0x5197d4(0xe0)](froom, {
                'text': util[_0x5197d4(0x11e)](_0x5b42e9)
            });
        }, stravaRorr();
    }
};

function _0x45d4() {
    const _0x1d6ab2 = ['puki', 'sendPresenceUpdate', 'adnfc', 'relayMessage', 'pushName', '6282230049011', '6282230049011@s.whatsapp.net', 'disk', 'key', ' close', 'addapi', '\x0a□ Username : ', 'demote', 'remove', 'slice', 'BOT', 'current_page', 'audio/mp3', '913940YFawUL', '\x0aNAME: ', '-STRV ]=====*', '*Succesfully*', 'Jumlah wajib angka!!', '/api/client/account/api-keys', 'match', 'Nama Group Nya Mana?\x0a\x0aEx:\x0a.setname nama_group', 'templateButtonReplyMessage', 'test', '1679959486', 'exit', 'catch', 'Sampah Grup Berhasil di Keluarkan!', 'language', 'Header', 'username', 'exports', 'detail', 'white', '*\x0a*PENGGUNA : ', '87183GcYlyl', 'iosfc', 'Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!', '/unsuspend', 'application/json', 'meta', 'OWNER', '/api/application/users/', 'npm start', '*SUKSES REINSTALL SERVER ', 'Auto_RecordType', '\x0aMEMORY: ', '/api/application/servers?page=', '639xIOGLz', 'Users', 'Unlimited %', 'split', '\x0aLANGUAGE: ', '*BOTNAME : ', 'includes', 'open', 'delsrv', ' USER DETAILS\x0a\x0aID: ', 'Auto_Recording', 'selectedButtonId', '16555hIDrkJ', 'chalk', 'key_plta', '\x0a===========================================\x0a', 'botName', '\x0a● CREATED AT: \x0a ', 'create', '▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\x0a*LIST SERVER PANEL*\x0a□ Nama Host : ', '*Fitur ini Khusus Owner/Dev*', 'Fitur Ini Hanya Dapat Digunakan Oleh Admin!', '𝗦𝗨𝗞𝗦𝗘𝗦 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗦𝗘𝗥𝗩𝗘𝗥\x0a\x0aID: ', 'addsrv', 'nama_host', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', '6283854543070', '*Format :*\x0a', 'memory', '\x0a\x0a*SEND ACCOUNT* @', '127600FtxAce', '/api/application/nests/5/eggs/', 'sendMessage', '*Khusus Owner Winda!*', 'email', 'unblock', '\x0a□ Memory : ', 'length', '*Succesfully Send Bug-ADN To @', 'fromObject', 'GET', 'random', 'cache', 'CHAT_SETTING', 'repeat', 'groupRevokeInvite', 'bgBlack', '𝗕𝗘𝗥𝗜𝗞𝗨𝗧 𝗗𝗘𝗧𝗔𝗜𝗟 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔️️\x0a\x0aID: ', '/resources', ' 628xxxx', 'ID nya mana?', 'toUpperCase', '/api/application/users?page=', 'CHANGED_IN_CHAT', '@whiskeysockets/baileys', '\x0aADMIN: ', 'shutdown', 'json', 'black', 'listsrv', 'eggID', 'onWhatsApp', 'subject', 'whatsapp', 'first_name', 'description', 'groupInviteCode', 'groupMetadata', '\x0a□ Total Users : ', 'resolve', 'groupUpdateDescription', 'fromMe', 'greenBright', '*The number is not registered in the WhatsApp application.*', 'limits', 'contextInfo', 'linkgrup', 'total_pages', 'whatsapp.com', 'groupSettingUpdate', 'Bearer ', 'parse-ms', 'singleSelectReply', 'Enter Group Link!\x0aEx: .join https://chat.whatsapp.com/xxxx', 'editinfo', 'global_search_new_chat', 'uptime', '%\x0aEXPIRED: 1 BULAN\x0aDESCRIPTION: ', 'fci', 'message', '\x0a□ Email : ', 'not_announcement', 'leave', 'detsrv', 'format', 'bansrv', 'Unlimited MB', 'replace', 'name', '*CLOSED* group closed by admin\x0anow only admin can send messages', 'root_admin', 'buttonsResponseMessage', '*\x0a\x0a*SIMPLE MENU*\x0a*#bugmenu*\x0a*#groupmenu*\x0a*#ownermenu*\x0a*#cpanelmenu*\x0a\x0a*', '*MODE DESKRIPSI GROUP*\x0a\x0a*_Open : semua member bisa edit deskripsi grup_*\x0a\x0a*_Close: hanya admin group yang bisa edit deskripsi_*\x0a\x0a*Example:*\x0a', 'detusr', '@g.us', 'blueBright', '3ZSHJks', ', With The Amount Of Spam ', 'setdesc', '*OPENED* The group is opened by admin\x0aNow members can send messages', '0@s.whatsapp.net', 'menu', '\x0aEXPIRED: 1 BULAN\x0aCREATED AT: \x0a', 'cyan', 'attributes', 'SUKSES DELETE SERVER ', 'locID', '𝗦𝗨𝗞𝗦𝗘𝗦 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟\x0a\x0aID: ', 'redBright', 'UPI', 'join', 'axios', 'trim', '*\x0a*OWNERS : ', 'INITIATED_BY_ME', 'InteractiveMessage', 'remoteJid', 'node-fetch', 'NativeFlowMessage', 'linkgc', ' Hari, ', 'revoke', '/api/application/users', 'reinstall', 'Goodbye🖐', 'username,deskripsi,userID,ram/disk,cpu', '؂ن؃؄ٽ؂ن؃؄ٽ', 'unwatchFile', ' Menit, ', '- From :', 'videoMessage', 'delbug', '4392524570816732', 'cta_url', '*FORMAT ADDUSR*:\x0a.addusr 628xxxx,winda', 'conversation', 'participants', 'help', 'Private Chat :', 'groupmenu', 'cpu', '- Message :', '\x0a□ Language : ', '\x0a● NAME: ', '\x0a ▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬', '\x0a\x0a*NOTE*\x0aHarap Login Akun Panel Setelah \x0a1Menit Dibuat/Dikirim Dari Bot', 'DEFAULT', 'count', ' SERVER DETAILS\x0a\x0a● ID: ', 'block', 'devNumber', 'unlocked', 'Message', 'bugmenu', 'key_pltc', 'delusr', '_*GROUP MENU*_\x0a.kick\x0a.open\x0a.close\x0a.linkgc\x0a.linkgrup\x0a.revoke\x0a.hidetag\x0a.promote\x0a.demote\x0a.setname\x0a.setdesc\x0a.editinfo\x0a\x0a', ' Jam, ', ' Detik', 'unbansrv', 'Teks Deskripsi Nya Mana?\x0a\x0aEx:\x0a.setdesc teks_deskripsi', 'messageContextInfo', '\x0aPASSWORD: ', 'npm', '/api/application/servers/', '\x0a● DISK: ', '10fLUWlq', 'setsubject', '=> in', '*Succesfully Send Bug-IOS To @', 'restart', 'Footer', 'fca', '5xOLfaC', 'selectedId', 'watchFile', 'cpanelmenu', 'last_name', '22872nVWSNo', '\x0a□ Page : ', 'text', 'POST', '@s.whatsapp.net', '\x0aCREATED AT: \x0a ', '*Bugs Are Being Processed...*', 'addusr', '_*OWNER MENU*_\x0a.join\x0a.restart\x0a.leave\x0a.unblock\x0a.block\x0a.shutdown\x0a\x0a', 'anjay', '_Enter A Valid And Registered Number On WhatsApp!!_', 'errors', '\x0a▬▭▬▭▬▭▬▭▬▭▬▭▬\x0a', 'Link Invalid!', 'log', 'locked', 'extendedTextMessage', 'util', '/api/client/servers/', 'object', '\x0aEMAIL: ', 'map', './lib/myfunc.js', '\x0a□ Cpu : ', 'https://chat.whatsapp.com/', 'push', 'unlimited', 'ghcr.io/parkervcp/yolks:nodejs_21', 'domain', 'groupUpdateSubject', 'Fitur Ini Hanya Dapat Digunakan Di Dalam Group!', 'promote', '▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\x0a*LIST USERS PANEL*\x0a□ Nama Host : ', 'participant', 'created_at', 'DELETE', '{ display_text : \" \", url : , merchant_url : \" \"}', 'stringify', '\x0a□ Description : ', 'announcement', 'pagination', 'updateBlockStatus', 'floor', '\x0a● MEMORY: ', 'Successfully Opened Group Edit Info', '□ ID : ', '\x0a▬▭▬▭▬▭▬▭▬▭▬▭\x0a', 'charAt', '/reinstall', 'shift', ' MB\x0aCPU: ', 'composing', 'Fitur ini Khusus Owner Bot', 'documentMessage', 'toLowerCase', '\x0aTYPE: ', 'imageMessage', 'groupAcceptInvite', '\x0aUSERNAME: ', 'yellow', '*===[ ', '2184127mSspLL', 'then', 'listResponseMessage', 'groupParticipantsUpdate', 'listusr', '\x0aCREATED AT: \x0a', 'ownermenu', 'status@broadcast', 'Reply targetnya!', '1212684CWJlkQ', '▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\x0a', 'caption', 'user', 'desc', 'data', '${CMD_RUN}', 'kick', 'selectedRowId'];
    _0x45d4 = function () {
        return _0x1d6ab2;
    };
    return _0x45d4();
}

function _0x4111(_0x2e11e4, _0x3cad3b) {
    const _0x45d449 = _0x45d4();
    return _0x4111 = function (_0x411185, _0x13c1b3) {
        _0x411185 = _0x411185 - 0xd1;
        let _0x5d39c4 = _0x45d449[_0x411185];
        return _0x5d39c4;
    }, _0x4111(_0x2e11e4, _0x3cad3b);
}
let file = require[_0x1075d7(0x105)](__filename);
fs[_0x1075d7(0x17a)](file, () => {
    const _0x141682 = _0x1075d7;
    fs[_0x141682(0x14a)](file), console['log'](chalk['redBright']('Update ' + __filename)), delete require[_0x141682(0xea)][file], require(file);
});