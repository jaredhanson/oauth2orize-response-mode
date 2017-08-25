# oauth2orize-response-mode

[OAuth2orize](https://github.com/jaredhanson/oauth2orize) extension providing
support for requesting a particular response mode.

This `response_mode` parameter is defined by [OAuth 2.0 Multiple Response Type Encoding Practices](http://openid.net/specs/oauth-v2-multiple-response-types-1_0.html)
and allows a client to request a particular mechanism for returning the
authorization response, other than the default redirection-based mechanism
using query and fragment encoding as specified by [OAuth 2.0](https://tools.ietf.org/html/rfc6749).

## Install

    $ npm install oauth2orize-response-mode

## Usage

#### Parse Request Extensions

In order to parse the additional parameter used to request a response mode,
register support for this extension with a `Server` instance:

```js
server.grant(require('oauth2orize-response-mode').extensions());
```

#### Add Additional Response Modes

Support for additional response modes can be added by extending the `Server`
instance using separately packaged modules.  Form Post response mode is
implemented by [oauth2orize-fprm](https://github.com/jaredhanson/oauth2orize-fprm).
Web Message response mode is implemented by [oauth2orize-wmrm](https://github.com/jaredhanson/oauth2orize-wmrm).

## Contributing

#### Tests

The test suite is located in the `test/` directory.  All new features are
expected to have corresponding test cases.  Ensure that the complete test suite
passes by executing:

```bash
$ make test
```

#### Coverage

All new feature development is expected to have test coverage.  Patches that
increse test coverage are happily accepted.  Coverage reports can be viewed by
executing:

```bash
$ make test-cov
$ make view-cov
```

## Support

#### Funding

This software is provided to you as open source, free of charge.  The time and
effort to develop and maintain this project is volunteered by [@jaredhanson](https://github.com/jaredhanson).
If you (or your employer) benefit from this project, please consider a financial
contribution.  Your contribution helps continue the efforts that produce this
and other open source software.

Funds are accepted via [PayPal](https://paypal.me/jaredhanson), [Venmo](https://venmo.com/jaredhanson),
and [other](http://jaredhanson.net/pay) methods.  Any amount is appreciated.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015-2017 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
