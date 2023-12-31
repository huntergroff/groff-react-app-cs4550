function Home() {
    return (
        <div>
            <div class="row">
                <div class="col-2 bg-black text-white d-none d-lg-block">
                    <ul class="list-group wd-course-navigation">
                        <li class="list-group-item active">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
                <div class="col-2 text-red d-none d-md-block">
                    <ul class="list-group wd-course-navigation">
                        <li class="list-group-item active">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
                <div class="col bg-primary">Modules</div>
                <div class="col-2 d-none d-xl-block">Status</div>
            </div>

            <table width="100%">
                <tbody>
                    <tr>
                        <td valign="top">
                            <ul>
                                <li>
                                    <a href="#">Northeastern</a>
                                </li>
                                <li>
                                    <a href="/Kanbas/Account/">Account</a>
                                </li>
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li>
                                    <a href="/Kanbas/Courses">Courses</a>
                                </li>
                                <li>
                                    <a href="#">Calendar</a>
                                </li>
                                <li>
                                    <a href="#">Inbox</a>
                                </li>
                                <li>
                                    <a href="#">History</a>
                                </li>
                                <li>
                                    <a href="#">Studio</a>
                                </li>
                                <li>
                                    <a href="#">Commons</a>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                            </ul>
                        </td>
                        <td valign="top">
                            <ul>
                                <li>
                                    <a href="/Kanbas/Courses/Home">Home</a>
                                </li>
                                <li>
                                    <a href="#">Modules</a>
                                </li>
                                <li>
                                    <a href="#">Piazza</a>
                                </li>
                                <li>
                                    <a href="#">Zoom Meetings</a>
                                </li>
                                <li>
                                    <a href="/Kanbas/Courses/Assignments">Assignments</a>
                                </li>
                                <li>
                                    <a href="#">Quizzes</a>
                                </li>
                                <li>
                                    <a href="/Kanbas/Courses/Grades">Grades</a>
                                </li>
                                <li>
                                    <a href="#">People</a>
                                </li>
                                <li>
                                    <a href="#">Panopto Video</a>
                                </li>
                                <li>
                                    <a href="#">Discussions</a>
                                </li>
                                <li>
                                    <a href="#">Announcements</a>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                </li>
                                <li>
                                    <a href="#">Files</a>
                                </li>
                                <li>
                                    <a href="#">Rubrics</a>
                                </li>
                                <li>
                                    <a href="#">Outcomes</a>
                                </li>
                                <li>
                                    <a href="#">Collaborations</a>
                                </li>
                                <li>
                                    <a href="#">Syllabus</a>
                                </li>
                                <li>
                                    <a href="#">Settings</a>
                                </li>
                            </ul>
                        </td>
                        <td valign="top">
                            <button>Collapse All</button>
                            <button>View Progress</button>

                            <select>
                                <option>Publish all</option>
                                <option>Publish all modules and items</option>
                                <option>Publish modules only</option>
                                <option>Unpublish</option>
                            </select>

                            <button>+ Module</button>

                            <ul>
                                <li>WEEK 0 - INTRO</li>
                                <ul>
                                    <li>LEARNING OBJECTIVES</li>
                                    <ul>
                                        <li>Introduction to the course</li>
                                        <li>Learn what is Web Development</li>
                                        <li>Creating a development environment</li>
                                        <li>Creating a web application</li>
                                        <li>Getting started with the 1st assignment</li>
                                    </ul>
                                    <li>READING</li>
                                    <ul>
                                        <li>Full Stack Developer - Chapter 1 - Introduction</li>
                                        <li>
                                            Full Stack Developer - Chapter 2 - Creating User Interfaces
                                            with HTML
                                        </li>
                                    </ul>
                                    <li>SLIDES</li>
                                    <ul>
                                        <li>
                                            <a href="#"
                                            >Introduction to Web Development (Links to an external
                                                site)</a
                                            >
                                        </li>
                                        <li>
                                            <a href="#"
                                            >Creating an HTTP server with Node.js (Links to an
                                                external site)</a
                                            >
                                        </li>
                                        <li>
                                            <a href="#"
                                            >Creating a React Application (Links to an external
                                                site)</a
                                            >
                                        </li>
                                    </ul>
                                </ul>
                                <li>WEEK 1 - HTML</li>
                                <ul>
                                    <li>LEARNING OBJECTIVES</li>
                                    <li>Learn how to create user interfaces with HTML</li>
                                    <li>Keep working on assignment 1</li>
                                    <li>Deploy the assignment to Netlify</li>
                                </ul>
                                <li>READING</li>
                                <ul>
                                    <li>Full Stack Developer - Chapter 1 - Introduction</li>
                                    <li>
                                        Full Stack Developer - Chapter 2 - Creating User Interfaces
                                        with HTML
                                    </li>
                                </ul>
                            </ul>
                        </td>
                        <td valign="top">
                            <h1>Course Status</h1>

                            <button>Unpublish</button>
                            <button>Published</button>

                            <br />
                            <br />

                            <ul>
                                <li><a href="#">Import Existing Content</a></li>
                                <li><a href="#">Import From Commons</a></li>
                                <li><a href="#">Choose Home Page</a></li>
                                <li><a href="#">View Course Stream</a></li>
                                <li><a href="#">New Announcement</a></li>
                                <li><a href="#">New Analytics</a></li>
                                <li><a href="#">View Course Notifications</a></li>
                            </ul>

                            <h1>Course Status</h1>

                            <a href="#">View Calendar</a>
                            <br />
                            <ul>
                                <li><a href="#">Lecture CS4550.12631.2024120 Sep 7 at 11:45am</a></li>
                                <li><a href="#">Lecture CS4550.12631.2024120 Sep 11 at 11:45am</a></li>
                                <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6 am</a></li>

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
}

export default Home();