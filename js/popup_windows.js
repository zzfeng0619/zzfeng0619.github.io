
new Vue({
    data: function () {
        this.$notify({
            title: "学姐好啊，学姐贴贴！😜",
            message: "学姐要开心哦，我有想你哒！！",
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 5000
        });
    }
})