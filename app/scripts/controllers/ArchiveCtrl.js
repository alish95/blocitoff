(function() {
  function ArchiveCtrl(Task) {
    this.tasks = Task.all;
    this.taskStatus = function (task) {
      Task.incompleteTask(task);
    };

    this.show = function(task) {
     return task.created > (moment().dayOfYear() - 7) && task.completed == false
    };

  }

  angular
    .module('blocitoff')
    .controller('ArchiveCtrl', ['Task', ArchiveCtrl]);
})();
