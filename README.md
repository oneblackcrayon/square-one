# Square One

A lightweight Wordpress boilerplate bringing together _s, Bootstrap, and Gulp.

## Get Started

`$ git clone https://github.com/sgoudie/square-one theme-name && rm -rf theme-name/.git`

- Run a find and replace for Square One, square_one, and square-one to match your theme
- `npm install && npm run build` in the command line will run npm, and gulp build for the first time
- After that just use `gulp`, or `npm run build`

### Local Development
We recommend using [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV.git) to setup a Vagrant server for local Wordpress development. Once you have Vagrant and Virtual Box installed, here is the quick command to setup a new project:

`git clone https://github.com/Varying-Vagrant-Vagrants/VVV.git project-name && cd project-name && rm -rf .git`

The just run `vagrant up`, wait a few minutes whilst Vagrant does it's thing, then clone Square One.

## Features

Square One is built on top of _s, but adds a few extras:

#### Bootstrap (SASS) v3
Managed via npm. Override variables in _variables.scss

#### Gulp SASS and PostCSS
SASS for precompiling, running automatically. PostCSS is used for CssNano and Autoprefixer; saving your fingers from vendor prefix fatigue.

#### BrowserSync
If you're using VVV for you local setup, this will work out of the box on port 9000. If not, make sure that the Gulp file is updated with the address of your development server.

#### Google Fonts
In `functions.php` there is a little snippet for adding Google Fonts. Just uncomment it and add your font family and weights.

```js
function google_fonts() {
  $query_args = array(
    'family' => 'Oswald:700,400|Merriweather:400italic,400,300italic,700'
  );
  wp_register_style( 'google_fonts', add_query_arg( $query_args, "//fonts.googleapis.com/css" ), array(), null );
  wp_enqueue_style( 'google_fonts' );
}
add_action('wp_enqueue_scripts', 'google_fonts');
```

## To Do:
- ES6 support
- Add js gulp tasks
- Add image gulp tasks
- Add config file for Gulp
