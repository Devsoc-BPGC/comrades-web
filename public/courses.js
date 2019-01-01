const baseUrl = "https://us-central1-balmy-component-204213.cloudfunctions.net";
const showCourseList = (courseList, status) => {
    courseList.forEach(course => {
        $("#list-courses").append(`
<div class="row justify-content-center">
    <div class="col-sm-12 col-md-8 col-lg-4 col-xl-4 justify-content-center">${course.name}</div>
</div>`);
    });
};

$.get(`${baseUrl}/courses/`, showCourseList);

