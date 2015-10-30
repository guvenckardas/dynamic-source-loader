#Overview

Dynamic source loader controller was created for appending all your script and style sources into your projects!

##Getting Started

> **Note:** You should read this section only if you want to configure the project and minify.

If you don't have grunt:

At first, npm must be installed your computer. If you haven't install, please check links below:

[Node.js](http://nodejs.org/download/)

After npm is ready to use, you must run the command below on your terminal:

~~~
npm install -g grunt-cli
~~~

Now you are ready to use Grunt

> **Note:** For more info and personal project usage:

[Grunt.js](http://http://gruntjs.com/getting-started)


> Before start; go to your project on command line and load assets with command:
~~~
npm install
~~~


## How to Use


###Example:
```sh
      
            var _srcController = new sourceLoaderController();

                var sourcesArray = [
                    {
                        srctype:"script",
                        path:"http://code.jquery.com/jquery-2.1.3.min.js"
                    },
                    {
                        srctype:"script",
                        path:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"
                    },
                    {
                        srctype:"css",
                        path:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css"
                    }
                ];

                _srcController.importSources(sourcesArray);

        

```

### Key Values
* **srctype**: script/css
* **path**: link to your source

  
###Minify Task

> Go to your project on command line and build project with command:
~~~
grunt build
~~~

