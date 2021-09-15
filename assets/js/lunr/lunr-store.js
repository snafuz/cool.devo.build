var store = [{
        "title": null,
        "excerpt":"     404     Page not found :(    The requested page could not be found.   ","categories": null,
        "tags": null,
        "url": "/404.html",
        "teaser": ""
      },{
        "title": "About",
        "excerpt":"About DevO/DevRel. ","categories": null,
        "tags": null,
        "url": "/about/",
        "teaser": ""
      },{
        "title": "Build and Run Cloud Native Apps",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/use-cases/cloudapps",
        "teaser": ""
      },{
        "title": "Cloud-Native Software Development on OCI",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/use-cases/clouddev",
        "teaser": ""
      },{
        "title": "Deploy Cassandra on Oracle Cloud (OCI) Linux VM",
        "excerpt":"This tutorial will guide you through the steps needed to set up your environment to run Cassandra in Oracle Cloud Infrastructure. Prerequisites You should have already deployed a VM 2.1 with Oracle Linux 7.9 (OEL7) in Oracle Cloud Infrastructure (OCI). - The installation of Oracle Linux 7.9 is using pip3.6...","categories": ["cloudapps"],
        "tags": ["oci","python","jupyter","backend"],
        "url": "/collections/tutorials/deploy-cassandra-on-oci",
        "teaser": ""
      },{
        "title": "Enterprise Cloud Native Development",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/use-cases/enterprise",
        "teaser": ""
      },{
        "title": "Top Frameworks for Top Languages",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/use-cases/frameworks",
        "teaser": ""
      },{
        "title": "Video Games, Servers, and Development",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/use-cases/games",
        "teaser": ""
      },{
        "title": "Collections",
        "excerpt":"     All The Things                                                       ","categories": null,
        "tags": null,
        "url": "/collections/",
        "teaser": ""
      },{
        "title": "Topics",
        "excerpt":"                 Filter:             All Tags     Collections     Personas     Languages     Frameworks     Topics                                                                                                                                                                      Personas                                                                                               Languages                                                                                               Frameworks                                                                                                    Tags                                                                                            ","categories": null,
        "tags": null,
        "url": "/topics/",
        "teaser": ""
      },{
        "title": "Use Cases",
        "excerpt":"- Build and Run Cloud Native Apps - Cloud-Native Software Development on OCI - Build, Move, and Modernize Applications - Java, GraalVM, and Helidon - Enterprise Cloud Native Development - Personal Cloud Services - Video Games, Servers, and Development - Top Frameworks for Top Languages ","categories": null,
        "tags": null,
        "url": "/use-cases/",
        "teaser": ""
      },{
        "title": "Proxima Safe",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/collections/proxima-safe/",
        "teaser": ""
      },{
        "title": "Learning with OCI",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/collections/learning-languages/",
        "teaser": ""
      },{
        "title": "Tutorials",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/collections/tutorials/",
        "teaser": ""
      },{
        "title": "Java, GraalVM, and Helidon",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/use-cases/java",
        "teaser": ""
      },{
        "title": "Build Your Own Language Translator on Oracle Cloud",
        "excerpt":"こにちわ！ Have you always wanted to learn a new language and be introduced to a new and different culture? I have, and for the last six months, I have been using Duolingo to get an introduction to the Japanese language. Among the seven secrets recommended by TED translators in this...","categories": ["personal"],
        "tags": ["oci","iot","apex","alwaysfree","architect","community"],
        "url": "/collections/learning-languages/learning-languages-with-oracle-cloud",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","categories": null,
        "tags": null,
        "url": "/assets/js/lunr/lunr-en.js",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","categories": null,
        "tags": null,
        "url": "/assets/js/lunr/lunr-gr.js",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"var store = [ { \"title\": , \"excerpt\": {{ doc.content | newlinetobr | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \", \" \" | replace:\" \",...","categories": null,
        "tags": null,
        "url": "/assets/js/lunr/lunr-store.js",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"@charset \"utf-8\"; $asset-url: \"/assets\"; @import \"minimal-mistakes/skins/\"; // skin @import \"minimal-mistakes\"; // main partials ","categories": null,
        "tags": null,
        "url": "/assets/css/main.css",
        "teaser": ""
      },{
        "title": "Build, Move, and Modernize Applications",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/use-cases/modernize",
        "teaser": ""
      },{
        "title": "Projects",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/pages",
        "teaser": ""
      },{
        "title": "Personal Cloud Services",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/use-cases/personal",
        "teaser": ""
      },{
        "title": "Chapter One: setting up the event-driven OCI components",
        "excerpt":"> Signals transmitted > Message received > Reaction making impact > Invisibly > > --- Neil Peart, (1982) Prologue During the hot summer of 2018 (now it seems like aeons ago), the Oracle Innovation Team in Rome created a Smart City model - named Proxima City made of Lego Bricks,...","categories": ["cloudapps"],
        "tags": ["devops","fullstack","oci","hardware"],
        "url": "/collections/proxima-safe/proxima-chapter-1",
        "teaser": ""
      },{
        "title": "Mr. Stark's Briefcase and ProximaSafe",
        "excerpt":"The Briefcase Dream I've always been a fan of Marvel superheroes comics, long before the successful movie franchise known as MCU. Actually, around 1972–1975, I could find several Marvel comics carefully translated and lettered in my native language by visiting my friendly (actually, he wasn't) news vendor, strategically placed in...","categories": ["cloudapps"],
        "tags": ["oci","iot","streaming","serverless","rpi","fullstack"],
        "url": "/collections/proxima-safe/proxima-overview",
        "teaser": ""
      },{
        "title": "Sample Page",
        "excerpt":"= Sample Page :url-asciidoctor: http://asciidoctor.org  This is a sample page composed in AsciiDoc. Jekyll converts it to HTML using {url-asciidoctor}[Asciidoctor].  [source,ruby] puts \"Hello, World!\" ","categories": null,
        "tags": null,
        "url": "/sample/",
        "teaser": ""
      },{
        "title": "hardware",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/hardware",
        "teaser": ""
      },{
        "title": "oci",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/oci",
        "teaser": ""
      },{
        "title": "pytorch",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/pytorch",
        "teaser": ""
      },{
        "title": "iot",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/iot",
        "teaser": ""
      },{
        "title": "streaming",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/streaming",
        "teaser": ""
      },{
        "title": "serverless",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/serverless",
        "teaser": ""
      },{
        "title": "rpi",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/rpi",
        "teaser": ""
      },{
        "title": "apex",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/apex",
        "teaser": ""
      },{
        "title": "alwaysfree",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/alwaysfree",
        "teaser": ""
      },{
        "title": "jupyter",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/jupyter",
        "teaser": ""
      },{
        "title": "fullstack",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/fullstack",
        "teaser": ""
      },{
        "title": "frontend",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/frontend",
        "teaser": ""
      },{
        "title": "devops",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/devops",
        "teaser": ""
      },{
        "title": "backend",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/backend",
        "teaser": ""
      },{
        "title": "architect",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/architect",
        "teaser": ""
      },{
        "title": "robotics",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/robotics",
        "teaser": ""
      },{
        "title": "arvr",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/arvr",
        "teaser": ""
      },{
        "title": "datascience",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/datascience",
        "teaser": ""
      },{
        "title": "gamedev",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/gamedev",
        "teaser": ""
      },{
        "title": "dbre",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/dbre",
        "teaser": ""
      },{
        "title": "community",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/community",
        "teaser": ""
      },{
        "title": "python",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/python",
        "teaser": ""
      },{
        "title": "javascript",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/javascript",
        "teaser": ""
      },{
        "title": "typescript",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/typescript",
        "teaser": ""
      },{
        "title": "go",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/go",
        "teaser": ""
      },{
        "title": "ruby",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/ruby",
        "teaser": ""
      },{
        "title": "terraform",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/terraform",
        "teaser": ""
      },{
        "title": "tensorflow",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/tensorflow",
        "teaser": ""
      },{
        "title": "micronaut",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/micronaut",
        "teaser": ""
      },{
        "title": "nodejs",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/nodejs",
        "teaser": ""
      },{
        "title": "spark",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/spark",
        "teaser": ""
      },{
        "title": "flask",
        "excerpt":"","categories": null,
        "tags": null,
        "url": "/topics/flask",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"Jekyll","categories": null,
        "tags": null,
        "url": "/feed.xml",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"                ","categories": null,
        "tags": null,
        "url": "/sitemap.xml",
        "teaser": ""
      },{
        "title": null,
        "excerpt":"Sitemap:  ","categories": null,
        "tags": null,
        "url": "/robots.txt",
        "teaser": ""
      },{
        "title": "Oracle Dev.O Tutorials",
        "excerpt":"Developer tutorials from your friends at Oracle and the developer community.  ","categories": null,
        "tags": null,
        "url": "/index.html",
        "teaser": ""
      }]
