/**
 * Created by todd.kim on 15-08-04.
 */
exports.index = function (req, res) {
    res.render('index',
        {
            "main_title" : "TEAM-PLEX",
            "service_title" : "INDIE-PLEX",
            "rows" : [[
                {
                    "title" : "Lorem",
                    "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales luctus ligula, et sodales ex mollis eu. In iaculis enim id nunc vulputate tempor. Proin vitae venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras eget justo in libero dapibus pharetra sit amet non magna. Etiam condimentum, velit ut varius malesuada, arcu tellus tristique quam, a fermentum odio urna lacinia sapien. Duis sodales lorem quis lectus scelerisque tristique. Nulla ut sem eu tellus ornare vulputate vel ac urna. Nam dapibus tellus nec luctus interdum."
                },
                {
                    "title" : "Ipsum",
                    "content" : "In vel erat quis arcu dapibus hendrerit. Nunc pellentesque libero quis enim dictum, non lobortis sapien rhoncus. Donec eu porta metus. Aliquam hendrerit volutpat urna, ut laoreet ante aliquam vel. Ut quis sapien vitae sapien placerat convallis. Maecenas blandit vulputate eros et dignissim. Sed hendrerit semper vestibulum. Fusce et nisl sed tortor vulputate tincidunt vitae ut erat. Integer hendrerit neque eget viverra hendrerit. Sed et lectus odio. Maecenas facilisis sed nisl a lacinia. Curabitur semper sem risus, eu consectetur massa viverra non. Mauris malesuada pharetra sem, at rutrum metus venenatis eu. Phasellus placerat mauris vitae felis porta, nec congue felis eleifend. Sed non hendrerit felis. Donec eu felis ac dui dignissim commodo vel at nisl."
                },
                {
                    "title" : "Lorem",
                    "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales luctus ligula, et sodales ex mollis eu. In iaculis enim id nunc vulputate tempor. Proin vitae venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras eget justo in libero dapibus pharetra sit amet non magna. Etiam condimentum, velit ut varius malesuada, arcu tellus tristique quam, a fermentum odio urna lacinia sapien. Duis sodales lorem quis lectus scelerisque tristique. Nulla ut sem eu tellus ornare vulputate vel ac urna. Nam dapibus tellus nec luctus interdum."
                },
                {
                    "title" : "Ipsum",
                    "content" : "In vel erat quis arcu dapibus hendrerit. Nunc pellentesque libero quis enim dictum, non lobortis sapien rhoncus. Donec eu porta metus. Aliquam hendrerit volutpat urna, ut laoreet ante aliquam vel. Ut quis sapien vitae sapien placerat convallis. Maecenas blandit vulputate eros et dignissim. Sed hendrerit semper vestibulum. Fusce et nisl sed tortor vulputate tincidunt vitae ut erat. Integer hendrerit neque eget viverra hendrerit. Sed et lectus odio. Maecenas facilisis sed nisl a lacinia. Curabitur semper sem risus, eu consectetur massa viverra non. Mauris malesuada pharetra sem, at rutrum metus venenatis eu. Phasellus placerat mauris vitae felis porta, nec congue felis eleifend. Sed non hendrerit felis. Donec eu felis ac dui dignissim commodo vel at nisl."
                },
                {
                    "title" : "Lorem",
                    "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales luctus ligula, et sodales ex mollis eu. In iaculis enim id nunc vulputate tempor. Proin vitae venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras eget justo in libero dapibus pharetra sit amet non magna. Etiam condimentum, velit ut varius malesuada, arcu tellus tristique quam, a fermentum odio urna lacinia sapien. Duis sodales lorem quis lectus scelerisque tristique. Nulla ut sem eu tellus ornare vulputate vel ac urna. Nam dapibus tellus nec luctus interdum."
                },
                {
                    "title" : "Ipsum",
                    "content" : "In vel erat quis arcu dapibus hendrerit. Nunc pellentesque libero quis enim dictum, non lobortis sapien rhoncus. Donec eu porta metus. Aliquam hendrerit volutpat urna, ut laoreet ante aliquam vel. Ut quis sapien vitae sapien placerat convallis. Maecenas blandit vulputate eros et dignissim. Sed hendrerit semper vestibulum. Fusce et nisl sed tortor vulputate tincidunt vitae ut erat. Integer hendrerit neque eget viverra hendrerit. Sed et lectus odio. Maecenas facilisis sed nisl a lacinia. Curabitur semper sem risus, eu consectetur massa viverra non. Mauris malesuada pharetra sem, at rutrum metus venenatis eu. Phasellus placerat mauris vitae felis porta, nec congue felis eleifend. Sed non hendrerit felis. Donec eu felis ac dui dignissim commodo vel at nisl."
                },
                {
                    "title" : "Lorem",
                    "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales luctus ligula, et sodales ex mollis eu. In iaculis enim id nunc vulputate tempor. Proin vitae venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras eget justo in libero dapibus pharetra sit amet non magna. Etiam condimentum, velit ut varius malesuada, arcu tellus tristique quam, a fermentum odio urna lacinia sapien. Duis sodales lorem quis lectus scelerisque tristique. Nulla ut sem eu tellus ornare vulputate vel ac urna. Nam dapibus tellus nec luctus interdum."
                }
            ],
            [
                {
                    "title" : "Ipsum",
                    "content" : "In vel erat quis arcu dapibus hendrerit. Nunc pellentesque libero quis enim dictum, non lobortis sapien rhoncus. Donec eu porta metus. Aliquam hendrerit volutpat urna, ut laoreet ante aliquam vel. Ut quis sapien vitae sapien placerat convallis. Maecenas blandit vulputate eros et dignissim. Sed hendrerit semper vestibulum. Fusce et nisl sed tortor vulputate tincidunt vitae ut erat. Integer hendrerit neque eget viverra hendrerit. Sed et lectus odio. Maecenas facilisis sed nisl a lacinia. Curabitur semper sem risus, eu consectetur massa viverra non. Mauris malesuada pharetra sem, at rutrum metus venenatis eu. Phasellus placerat mauris vitae felis porta, nec congue felis eleifend. Sed non hendrerit felis. Donec eu felis ac dui dignissim commodo vel at nisl."
                },
                {
                    "title" : "Lorem",
                    "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales luctus ligula, et sodales ex mollis eu. In iaculis enim id nunc vulputate tempor. Proin vitae venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras eget justo in libero dapibus pharetra sit amet non magna. Etiam condimentum, velit ut varius malesuada, arcu tellus tristique quam, a fermentum odio urna lacinia sapien. Duis sodales lorem quis lectus scelerisque tristique. Nulla ut sem eu tellus ornare vulputate vel ac urna. Nam dapibus tellus nec luctus interdum."
                },
                {
                    "title" : "Ipsum",
                    "content" : "In vel erat quis arcu dapibus hendrerit. Nunc pellentesque libero quis enim dictum, non lobortis sapien rhoncus. Donec eu porta metus. Aliquam hendrerit volutpat urna, ut laoreet ante aliquam vel. Ut quis sapien vitae sapien placerat convallis. Maecenas blandit vulputate eros et dignissim. Sed hendrerit semper vestibulum. Fusce et nisl sed tortor vulputate tincidunt vitae ut erat. Integer hendrerit neque eget viverra hendrerit. Sed et lectus odio. Maecenas facilisis sed nisl a lacinia. Curabitur semper sem risus, eu consectetur massa viverra non. Mauris malesuada pharetra sem, at rutrum metus venenatis eu. Phasellus placerat mauris vitae felis porta, nec congue felis eleifend. Sed non hendrerit felis. Donec eu felis ac dui dignissim commodo vel at nisl."
                }
            ],
            [
                {
                    "title" : "Lorem",
                    "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales luctus ligula, et sodales ex mollis eu. In iaculis enim id nunc vulputate tempor. Proin vitae venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras eget justo in libero dapibus pharetra sit amet non magna. Etiam condimentum, velit ut varius malesuada, arcu tellus tristique quam, a fermentum odio urna lacinia sapien. Duis sodales lorem quis lectus scelerisque tristique. Nulla ut sem eu tellus ornare vulputate vel ac urna. Nam dapibus tellus nec luctus interdum."
                },
                {
                    "title" : "Ipsum",
                    "content" : "In vel erat quis arcu dapibus hendrerit. Nunc pellentesque libero quis enim dictum, non lobortis sapien rhoncus. Donec eu porta metus. Aliquam hendrerit volutpat urna, ut laoreet ante aliquam vel. Ut quis sapien vitae sapien placerat convallis. Maecenas blandit vulputate eros et dignissim. Sed hendrerit semper vestibulum. Fusce et nisl sed tortor vulputate tincidunt vitae ut erat. Integer hendrerit neque eget viverra hendrerit. Sed et lectus odio. Maecenas facilisis sed nisl a lacinia. Curabitur semper sem risus, eu consectetur massa viverra non. Mauris malesuada pharetra sem, at rutrum metus venenatis eu. Phasellus placerat mauris vitae felis porta, nec congue felis eleifend. Sed non hendrerit felis. Donec eu felis ac dui dignissim commodo vel at nisl."
                },
                {
                    "title" : "Lorem",
                    "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales luctus ligula, et sodales ex mollis eu. In iaculis enim id nunc vulputate tempor. Proin vitae venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras eget justo in libero dapibus pharetra sit amet non magna. Etiam condimentum, velit ut varius malesuada, arcu tellus tristique quam, a fermentum odio urna lacinia sapien. Duis sodales lorem quis lectus scelerisque tristique. Nulla ut sem eu tellus ornare vulputate vel ac urna. Nam dapibus tellus nec luctus interdum."
                },
                {
                    "title" : "Ipsum",
                    "content" : "In vel erat quis arcu dapibus hendrerit. Nunc pellentesque libero quis enim dictum, non lobortis sapien rhoncus. Donec eu porta metus. Aliquam hendrerit volutpat urna, ut laoreet ante aliquam vel. Ut quis sapien vitae sapien placerat convallis. Maecenas blandit vulputate eros et dignissim. Sed hendrerit semper vestibulum. Fusce et nisl sed tortor vulputate tincidunt vitae ut erat. Integer hendrerit neque eget viverra hendrerit. Sed et lectus odio. Maecenas facilisis sed nisl a lacinia. Curabitur semper sem risus, eu consectetur massa viverra non. Mauris malesuada pharetra sem, at rutrum metus venenatis eu. Phasellus placerat mauris vitae felis porta, nec congue felis eleifend. Sed non hendrerit felis. Donec eu felis ac dui dignissim commodo vel at nisl."
                },
                {
                    "title" : "Lorem",
                    "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales luctus ligula, et sodales ex mollis eu. In iaculis enim id nunc vulputate tempor. Proin vitae venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras eget justo in libero dapibus pharetra sit amet non magna. Etiam condimentum, velit ut varius malesuada, arcu tellus tristique quam, a fermentum odio urna lacinia sapien. Duis sodales lorem quis lectus scelerisque tristique. Nulla ut sem eu tellus ornare vulputate vel ac urna. Nam dapibus tellus nec luctus interdum."
                }
            ],
            [
                {
                    "title" : "Ipsum",
                    "content" : "In vel erat quis arcu dapibus hendrerit. Nunc pellentesque libero quis enim dictum, non lobortis sapien rhoncus. Donec eu porta metus. Aliquam hendrerit volutpat urna, ut laoreet ante aliquam vel. Ut quis sapien vitae sapien placerat convallis. Maecenas blandit vulputate eros et dignissim. Sed hendrerit semper vestibulum. Fusce et nisl sed tortor vulputate tincidunt vitae ut erat. Integer hendrerit neque eget viverra hendrerit. Sed et lectus odio. Maecenas facilisis sed nisl a lacinia. Curabitur semper sem risus, eu consectetur massa viverra non. Mauris malesuada pharetra sem, at rutrum metus venenatis eu. Phasellus placerat mauris vitae felis porta, nec congue felis eleifend. Sed non hendrerit felis. Donec eu felis ac dui dignissim commodo vel at nisl."
                },
                {
                    "title" : "Lorem",
                    "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales luctus ligula, et sodales ex mollis eu. In iaculis enim id nunc vulputate tempor. Proin vitae venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras eget justo in libero dapibus pharetra sit amet non magna. Etiam condimentum, velit ut varius malesuada, arcu tellus tristique quam, a fermentum odio urna lacinia sapien. Duis sodales lorem quis lectus scelerisque tristique. Nulla ut sem eu tellus ornare vulputate vel ac urna. Nam dapibus tellus nec luctus interdum."
                },
                {
                    "title" : "Ipsum",
                    "content" : "In vel erat quis arcu dapibus hendrerit. Nunc pellentesque libero quis enim dictum, non lobortis sapien rhoncus. Donec eu porta metus. Aliquam hendrerit volutpat urna, ut laoreet ante aliquam vel. Ut quis sapien vitae sapien placerat convallis. Maecenas blandit vulputate eros et dignissim. Sed hendrerit semper vestibulum. Fusce et nisl sed tortor vulputate tincidunt vitae ut erat. Integer hendrerit neque eget viverra hendrerit. Sed et lectus odio. Maecenas facilisis sed nisl a lacinia. Curabitur semper sem risus, eu consectetur massa viverra non. Mauris malesuada pharetra sem, at rutrum metus venenatis eu. Phasellus placerat mauris vitae felis porta, nec congue felis eleifend. Sed non hendrerit felis. Donec eu felis ac dui dignissim commodo vel at nisl."
                },
                {
                    "title" : "Lorem",
                    "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales luctus ligula, et sodales ex mollis eu. In iaculis enim id nunc vulputate tempor. Proin vitae venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras eget justo in libero dapibus pharetra sit amet non magna. Etiam condimentum, velit ut varius malesuada, arcu tellus tristique quam, a fermentum odio urna lacinia sapien. Duis sodales lorem quis lectus scelerisque tristique. Nulla ut sem eu tellus ornare vulputate vel ac urna. Nam dapibus tellus nec luctus interdum."
                },
                {
                    "title" : "Ipsum",
                    "content" : "In vel erat quis arcu dapibus hendrerit. Nunc pellentesque libero quis enim dictum, non lobortis sapien rhoncus. Donec eu porta metus. Aliquam hendrerit volutpat urna, ut laoreet ante aliquam vel. Ut quis sapien vitae sapien placerat convallis. Maecenas blandit vulputate eros et dignissim. Sed hendrerit semper vestibulum. Fusce et nisl sed tortor vulputate tincidunt vitae ut erat. Integer hendrerit neque eget viverra hendrerit. Sed et lectus odio. Maecenas facilisis sed nisl a lacinia. Curabitur semper sem risus, eu consectetur massa viverra non. Mauris malesuada pharetra sem, at rutrum metus venenatis eu. Phasellus placerat mauris vitae felis porta, nec congue felis eleifend. Sed non hendrerit felis. Donec eu felis ac dui dignissim commodo vel at nisl."
                },
                {
                    "title" : "Lorem",
                    "content" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sodales luctus ligula, et sodales ex mollis eu. In iaculis enim id nunc vulputate tempor. Proin vitae venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras eget justo in libero dapibus pharetra sit amet non magna. Etiam condimentum, velit ut varius malesuada, arcu tellus tristique quam, a fermentum odio urna lacinia sapien. Duis sodales lorem quis lectus scelerisque tristique. Nulla ut sem eu tellus ornare vulputate vel ac urna. Nam dapibus tellus nec luctus interdum."
                }
            ]]
        }
    );
};