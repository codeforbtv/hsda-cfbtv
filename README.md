# OpenReferral.org HSDA Implementation for BTV

OpenReferral is a project that has been building a set of standards to better facilitate building and sharing community service information, such as what is often associated with 211 systems.

OpenReferral provides a data specification for how the data will be stored called the Human Services Data Specification - the HSDS.

Access to and use of the HSDS is defined via the Human Services Data API - the HSDA.

This project aims to implement the HSDA as a method by which the brigade can then enable HSDA client programs - front-ends - to start creating and managing HSDS data for Burlington or all of Vermont.

Demo at https://codeforbtv-openreferral.herokuapp.com/

# Contributing!?

Hop over to the [GitHub project](https://github.com/codeforbtv/hsda-cfbtv/projects/1) and claim a task card by dragging it to the "claimed" column, and assigning it to your GitHub user name.

The task cards with "Good First Issue" are ideal for beginners.

When you are ready, clone the repo using Git on your computer. Then make sure to "checkout" (aka switch-to) the development branch... or create your own branch with your own name.

This API, as was mentioned below, was generated with the intention of being built as a Restify-based API. You will likely find it useful to [reference the documentation for Restify](http://restify.com/) as you work.

## How the initial commit was reached

We used "swagger-node" to generate an HSDA server skeleton.
https://github.com/swagger-api/swagger-node

<ol>
  <li>Created New folder and open terminal/cli in that folder</li>
  <li>Use newest-ish node: <pre>nvm use 14.15.4</pre></li>
  <!-- I use 14.16, should I use newest (15.12.0)? -->
  <li>Install swagger-node: <pre>npm install -g swagger</pre></li>
  <li>Create project: <mono>swagger project create hsda-cfbtv</mono>
    <ul>
    <li>Chose “Restify” because of having used it the most before</li>
    </ul>
  </li>
  <li>Use the OpenReferral YAML to overwrite the hello-world skeleton
    <ol>
    <!-- Having trouble here  -->
    <li>Go get the YAML: https://github.com/openreferral/api-specification/blob/master/_data/api-commons/openapi-hsda.yaml</li>
    <li>Start the project in edit mode: <pre>swagger project edit</pre>
      <ul>
      <li>The web browser should open in edit mode showing YAML on the left, and API GUI on the right</li>
      </ul
    </li>
    <li>Open the YAML and copy the contents to clipboard</li>
    <li>Select-all in the web browser YAML file display, delete, and paste OpenReferral YAML
      <ul>
        <li>It will take a few seconds for the browser to process and show updated editable-GUI</li>
        <li>When it is done it should say it was saved in the top right corner (this is automatic, there is no button to push to save it)</li>
      </ul>
    </ol>
  </li>
</li>
<li>Start API: <pre>swagger project start</pre></li>
<li>Fix generated project
  <ol>
    <li>There is a problem with swagger-node and modern versions of Node (i.e., => 10 ... which is bizarre!)</li>
    <li>Fix based on this note -> https://github.com/swagger-api/swagger-node/issues/586#issuecomment-560078107</li>
    <!-- Is this supposed to be package.json? -->
    <li>Edit ‘hsda-cftbv/project.json’ and change:
<details>
<summary>that</summary>
<pre>
"dependencies": 
{
  "bagpipes": "^0.2.2",
  "restify": "^4.0.2",
  "swagger-restify-mw": "^0.1.0”
}
</pre>
</details>to<details>
  <summary>this</summary>
  <pre>
  "dependencies": 
  {
    "bagpipes": "^0.2.2",
    "restify": "^4.0.2",
    "swagger-restify-mw": "^0.<b>7</b>.0"
  }
  </pre>
</details>
<li>Edit ‘hsda-cfbtv/config/default.yml’ and change:
</details>to<details>
  <summary>that</summary>
  <pre>
    swagger_controllers:
    - onError: json_error_handler
    - cors
    - swagger_security
    - _swagger_validate
    - express_compatibility
    - _router
</pre>
  </details>
  to
</details>to<details>
  <summary>this</summary>
  <pre>
    swagger_controllers:
    - onError: json_error_handler
    - cors
    <b>- swagger_params_parser</b>
    - swagger_security
    - _swagger_validate
    - express_compatibility
    - _router
</pre>
</details>
</li>
</ol>
<li>Restart swagger project</li>
</ol>

## Configure Auth0 API & App to get token with username and password

https://auth0.com/docs/flows/call-your-api-using-resource-owner-password-flow#ask-for-a-token

## Make sure email address is attached to token via custom claims

https://auth0.com/docs/scopes/sample-use-cases-scopes-and-claims#add-custom-claims-to-a-token

- create a rule with the following function

```
function (user, context, callback) {
  const namespace = 'https://codeforbtv.org/';
  context.accessToken[namespace + 'email'] = user.email;
  return callback(null, user, context);
}
```

## Obtain a Json Web Token (JWT)

1 - Sign up for an account at 

2 - To obtain a token

```bash
curl --request POST \
  --url https://codeforbtv.us.auth0.com/oauth/token \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data grant_type=password \
  --data username=test.user@codeforbtv.org \
  --data password=P@ssw0rd \
  --data client_id=CTTBWOOzuza3IFMkFmcsWIrQzImMu4Ey \
  --data client_secret=Bql2HYM1uU9NNfcrNPZsznLGhfFH4WeKHeCXekb7dc01QOYf7iPftGGSkWLhRAbR \
  --data audience=hsda.codeforbtv.org
```

## Call API with Token

```bash
curl --request POST \
  --url http://localhost:10010/contacts \
  --header 'Acceptccept: application/json' \
  --header 'Authorization: Bearer <TOKEN_GOES_HERE>' \
  --header 'Content-Type: application/json' \
  --data '{}'
```