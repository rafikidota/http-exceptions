# HTTP Exceptions
 Just my own http exceptions library with blackjack and hookers

<img 
alt="Bender"
src = "https://github.com/rafikidota/http-exceptions/raw/main/bender.png?raw=true" 
style="width:250px"/>

## npm
 ```bash
npm install @rafikidota/http-exceptions
```

## yarn
 ```bash
yarn add @rafikidota/http-exceptions
```
## pnpm
 ```bash
pnpm add @rafikidota/http-exceptions
```

## Using `@rafikidota/http-exceptions` with Express

The following JavaScript code snippet demonstrates an example of using the `@rafikidota/http-exceptions` library in conjunction with the Express framework. This code sets up a basic Express server and showcases how to handle HTTP exceptions using the library.

```js
const express = require('express');
const { HttpException, BadRequestException, UnauthorizedException, ForbiddenException, NotFoundException, InternalServerErrorException } = require('@rafikidota/http-exceptions');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
```

## HttpException
```js
app.get('/http-exception', (req, res) => {
    throw new HttpException('Not Implemented', 501);
});
```

## BadRequest
```js
app.get('/bad-request', (req, res) => {
    throw new BadRequestException('An bad request example');
});
```

## Unauthorized
```js
app.get('/unauthorized', (req, res) => {
    throw new UnauthorizedException('An unauthorized example');
});
```

## Forbidden
```js
app.get('/forbidden', (req, res) => {
    throw new ForbiddenException('A forbidden example');
});
```

## Not found
```js
app.get('/not-found', (req, res) => {
    throw new NotFoundException('An not found example');
});
```

## Interal Server Error
```js
app.get('/internal-server-error', (req, res) => {
    throw new InternalServerErrorException('An internal server error example');
});
```

## Handling errors
```js
app.use((error, req, res, next) => {
    const { name, message, status } = error;
    return res.status(status || 500).json({ name, message, status });
});
```

Explore the code example on GitHub [here](https://github.com/rafikidota/express-http-exceptions/)