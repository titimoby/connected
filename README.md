**Connected**
* * * * *
This project aims at experimenting interaction between virtual and real worlds through connected objects.

There are 2 parts :
- a LUA mod to be used in [Minetest game](http://www.minetest.net/)
- a [nodejs](https://nodejs.org/) application to serve as a bridge between Minetest and connected objects. (for the moment, it uses MQTT through [Mosca](https://github.com/mcollina/mosca/))


*******************************************************************
*                                 .-.                             *
*                              .-+   |                            *
*                          .--+       '--.                        *
*                         |  App nodejs   |                       *
*                          '-------------'                        *
*                               ^      ^                          *
*                               |      |                          *
*          .--------------------'      '-----------------.        *
*          |                                             |        *
*          v                                             v        *
*     .---------.                                   .--------.    *
*     |         |                                  | Microbit |   *
*     |         |                                  |          |   *
*     +---------+                                  |          |   *
*    /// _____ \\\                                 | o o o o  |   *
*   '-------------'                                 '--------'    *
*    Minetest server                                              *
*******************************************************************

*nicer version is available [here](https://titimoby.github.io/connected/)*

<!-- Markdeep: --><style class="fallback">body{visibility:hidden;white-space:pre;font-family:monospace}</style><script src="markdeep.min.js"></script><script src="https://casual-effects.com/markdeep/latest/markdeep.min.js"></script><script>window.alreadyProcessedMarkdeep||(document.body.style.visibility="visible")</script>
