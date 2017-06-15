angular.module("playerApp.config", [])
.constant("config", {"SITE":{"DEFAULT_LANGUAGE":"en"},"URL":{"BASE":"http://localhost:5000/api/sb/v1/","USER_BASE":"http://10.0.1.75:9000/v1/","MOCK_API_BASE":"http://13.71.127.158:9000/v1/","CONFIG_BASE":"http://localhost:4000/api/sb/v1/","USER":{"RESOURCE_BUNDLE":"resourcebundle"},"COURSE":{"SEARCH":"course/search","CREATE":"course/create","UPDATE":"course/update","REVIEW":"course/review","PUBLISH":"course/publish","GET":"course/get","GET_MY_COURSE":"course/get/mycourse","HIERARCHY":"course/hierarchy","UPLOAD_MEDIA":"upload/media","USER_COURSE_SCHEDULE":"user/courses","USER_CONTENT_STATE":"user/content/state","GET_ENROLLED_COURSES":"user/courses","GET_LEARN_OTHER_SECTION":"page/assemble/learn.explore/org.sunbird.mobile"},"CONTENT":{"SEARCH":"content/search","CREATE":"content/create","UPDATE":"content/update","REVIEW":"content/review","PUBLISH":"content/publish","GET":"content/get","GET_MY_COURSE":"content/get/mycontent","UPLOAD":"content/upload","UPLOAD_MEDIA":"upload/media"},"AUTH":{"LOGIN":"user/login","LOGOUT":"user/logout","PROFILE":"user/getProfile"},"NOTES":{"SEARCH":"notes/search","CREATE":"notes/create","UPDATE":"notes/update","GET":"notes/get","DELETE":"notes/delete"},"RESOURCE":{"GET":"page/assemble/resources.explore/org.sunbird.mobile"}},"MESSAGES":{"AUTH":{"LOGIN":{"FAILED":"invalid username and password"},"LOGOUT":{"FAILED":"Logout failed"}},"NOTES":{"CREATE":{"START":"Creating note, please wait...","FAILED":"Creating note is failed, please try again later...","SUCCESS":"Note created successfully..."},"GET":{"START":"Fetching note detail, please wait...","FAILED":"Fetching note detail is failed, please try again later...","SUCCESS":"Note detail fetched successfully..."},"REMOVE":{"START":"Deleting note, please wait...","FAILED":"Deleting note is failed, please try again later...","SUCCESS":"Note deleted successfully..."},"SEARCH":{"START":"Searching notes, please wait...","FAILED":"Searching note is failed, please try again later...","SUCCESS":"Note detail fetched successfully..."},"UPDATE":{"START":"Updating note, please wait...","FAILED":"Updating note is failed, please try again later...","SUCCESS":"Note updated successfully..."}}},"ekstep_CE_config":{"context":{"authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI1OWFiMmE2MDc1YzI0ODU2YjhiYjIzMjg4ZDdhZGNmNSJ9.RLouNX7RQ0VkVv2BYqNtH12D0IzKnBJ_I46xEORwHsU","mode":"preview"},"config":{"showEndPage":true,"showStartPage":true,"host":"https://dev.ekstep.in","apislug":"/api"},"baseURL":"/content/preview/preview.html?webview=true"}});
