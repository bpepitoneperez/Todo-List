(()=>{"use strict";const o=[];let e=0;const t=(o,e,t,l,n)=>({title:o,description:e,dueDate:t,priority:l,project:n,index:0}),l=(e,t)=>{let l=o[t.index];l.list.push(e),e.index=l.todoIndex,l.todoIndex++};let n={name:"default",index:e,todoIndex:0,list:[]};var d;d=n,o.push(d),e++,console.log(n);let i=t("clean","clean the room","tomorrow","low",n);console.log(i);let s=t("cook","cook food","tonight","low",n);console.log(s);let c=t("task1","do a thing 1","tomorrow","low",n);console.log(c);let r=t("task2","do a thing 2","tomorrow","low",n);console.log(r);let a=t("task3","do a third thing","tomorrow","low",n);console.log(a),l(i,n),l(s,n),l(c,n),l(a,n),l(r,n),console.log(n),((e,t)=>{let l=o[t.index];l.list.splice(e.index,1),l.list.forEach((o=>{o.index>=e.index&&o.index--})),l.todoIndex--})(s,n),console.log(n)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFBVyxHQUNqQixJQUFJQyxFQUFnQixFQUVwQixNQVlNQyxFQUFPLENBQUNDLEVBQU9DLEVBQWFDLEVBQVNDLEVBQVVDLEtBRTFDLENBQ0hKLE1BQUFBLEVBQ0FDLFlBQUFBLEVBQ0FDLFFBQUFBLEVBQ0FDLFNBQUFBLEVBQ0FDLFFBQUFBLEVBQ0FDLE1BUFEsSUFXVkMsRUFBVSxDQUFDQyxFQUFNSCxLQUNuQixJQUFJSSxFQUFVWCxFQUFTTyxFQUFRQyxPQUMvQkcsRUFBUUMsS0FBS0MsS0FBS0gsR0FDbEJBLEVBQUtGLE1BQVFHLEVBQVFHLFVBQ3JCSCxFQUFRRyxhQzdCWixJQUFJQyxFREtPLENBQ0hDLEtDTnFCLFVET3JCUixNQUhRUCxFQUlSYSxVQUxZLEVBTVpGLEtBUE8sSUFEQyxJQTBDSUssRUFBQUEsRUMxQ1RGLEVEMkNQZixFQUFTYSxLQUFLSSxHQUNkaEIsSUMzQ0ppQixRQUFRQyxJQUFJSixHQUVaLElBQUlLLEVBQVFsQixFQUFLLFFBQVMsaUJBQWtCLFdBQVksTUFBT2EsR0FDL0RHLFFBQVFDLElBQUlDLEdBRVosSUFBSUMsRUFBUW5CLEVBQUssT0FBUSxZQUFhLFVBQVcsTUFBT2EsR0FDeERHLFFBQVFDLElBQUlFLEdBRVosSUFBSUMsRUFBUXBCLEVBQUssUUFBUyxlQUFnQixXQUFZLE1BQU9hLEdBQzdERyxRQUFRQyxJQUFJRyxHQUVaLElBQUlDLEVBQVFyQixFQUFLLFFBQVMsZUFBZ0IsV0FBWSxNQUFPYSxHQUM3REcsUUFBUUMsSUFBSUksR0FFWixJQUFJQyxFQUFRdEIsRUFBSyxRQUFTLG1CQUFvQixXQUFZLE1BQU9hLEdBQ2pFRyxRQUFRQyxJQUFJSyxHQUVaZixFQUFRVyxFQUFPTCxHQUNmTixFQUFRWSxFQUFPTixHQUNmTixFQUFRYSxFQUFPUCxHQUNmTixFQUFRZSxFQUFPVCxHQUNmTixFQUFRYyxFQUFPUixHQUVmRyxRQUFRQyxJQUFJSixHRE9PLEVBQUNMLEVBQU1ILEtBQ3RCLElBQUlJLEVBQVVYLEVBQVNPLEVBQVFDLE9BQy9CRyxFQUFRQyxLQUFLYSxPQUFPZixFQUFLRixNQUFPLEdBQ2hDRyxFQUFRQyxLQUFLYyxTQUFRQyxJQUNiQSxFQUFNbkIsT0FBU0UsRUFBS0YsT0FDcEJtQixFQUFNbkIsV0FHZEcsRUFBUUcsYUNiWmMsQ0FBV1AsRUFBT04sR0FFbEJHLFFBQVFDLElBQUlKLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RydWN0dXJlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0cyA9IFtdO1xubGV0IHByb2plY3RzSW5kZXggPSAwO1xuXG5jb25zdCBQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGxldCB0b2RvSW5kZXggPSAwO1xuICAgIGxldCBpbmRleCA9IHByb2plY3RzSW5kZXg7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHRvZG9JbmRleCxcbiAgICAgICAgbGlzdCxcbiAgICB9XG59XG5cbmNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgaW5kZXgsXG4gICAgfVxufVxuXG5jb25zdCBhZGRUb2RvID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgICBsZXQgY29ycmVjdCA9IHByb2plY3RzW3Byb2plY3QuaW5kZXhdO1xuICAgIGNvcnJlY3QubGlzdC5wdXNoKHRvZG8pO1xuICAgIHRvZG8uaW5kZXggPSBjb3JyZWN0LnRvZG9JbmRleDtcbiAgICBjb3JyZWN0LnRvZG9JbmRleCsrO1xufVxuXG5jb25zdCByZW1vdmVUb2RvID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgICBsZXQgY29ycmVjdCA9IHByb2plY3RzW3Byb2plY3QuaW5kZXhdO1xuICAgIGNvcnJlY3QubGlzdC5zcGxpY2UodG9kby5pbmRleCwgMSk7XG4gICAgY29ycmVjdC5saXN0LmZvckVhY2godGhpbmcgPT4ge1xuICAgICAgICBpZiAodGhpbmcuaW5kZXggPj0gdG9kby5pbmRleCkge1xuICAgICAgICAgICAgdGhpbmcuaW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvcnJlY3QudG9kb0luZGV4LS07XG59XG5cbmNvbnN0IGFkZFByb2plY3QgPSAocHJvaikgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvaik7XG4gICAgcHJvamVjdHNJbmRleCsrO1xufVxuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdC5pbmRleCA+PSBpbmRleCkge1xuICAgICAgICAgICAgcHJvamVjdC5pbmRleCA9IHByb2plY3QuaW5kZXggLSAxO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcHJvamVjdHNJbmRleC0tO1xufVxuXG5leHBvcnQge1RvZG8sIFByb2plY3QsIGFkZFRvZG8sIHJlbW92ZVRvZG8sIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3R9IiwiaW1wb3J0IHtUb2RvLCBQcm9qZWN0LCBhZGRUb2RvLCByZW1vdmVUb2RvLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0fSBmcm9tICcuL3N0cnVjdHVyZSdcblxubGV0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgnZGVmYXVsdCcpO1xuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG5cbmxldCB0b2RvMSA9IFRvZG8oJ2NsZWFuJywgJ2NsZWFuIHRoZSByb29tJywgJ3RvbW9ycm93JywgJ2xvdycsIGRlZmF1bHRQcm9qZWN0KTtcbmNvbnNvbGUubG9nKHRvZG8xKTtcblxubGV0IHRvZG8yID0gVG9kbygnY29vaycsICdjb29rIGZvb2QnLCAndG9uaWdodCcsICdsb3cnLCBkZWZhdWx0UHJvamVjdCk7XG5jb25zb2xlLmxvZyh0b2RvMik7XG5cbmxldCB0b2RvMyA9IFRvZG8oJ3Rhc2sxJywgJ2RvIGEgdGhpbmcgMScsICd0b21vcnJvdycsICdsb3cnLCBkZWZhdWx0UHJvamVjdCk7XG5jb25zb2xlLmxvZyh0b2RvMyk7XG5cbmxldCB0b2RvNCA9IFRvZG8oJ3Rhc2syJywgJ2RvIGEgdGhpbmcgMicsICd0b21vcnJvdycsICdsb3cnLCBkZWZhdWx0UHJvamVjdCk7XG5jb25zb2xlLmxvZyh0b2RvNCk7XG5cbmxldCB0b2RvNSA9IFRvZG8oJ3Rhc2szJywgJ2RvIGEgdGhpcmQgdGhpbmcnLCAndG9tb3Jyb3cnLCAnbG93JywgZGVmYXVsdFByb2plY3QpO1xuY29uc29sZS5sb2codG9kbzUpO1xuXG5hZGRUb2RvKHRvZG8xLCBkZWZhdWx0UHJvamVjdCk7XG5hZGRUb2RvKHRvZG8yLCBkZWZhdWx0UHJvamVjdCk7XG5hZGRUb2RvKHRvZG8zLCBkZWZhdWx0UHJvamVjdCk7XG5hZGRUb2RvKHRvZG81LCBkZWZhdWx0UHJvamVjdCk7XG5hZGRUb2RvKHRvZG80LCBkZWZhdWx0UHJvamVjdCk7XG5cbmNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxucmVtb3ZlVG9kbyh0b2RvMiwgZGVmYXVsdFByb2plY3QpO1xuXG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG4iXSwibmFtZXMiOlsicHJvamVjdHMiLCJwcm9qZWN0c0luZGV4IiwiVG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0IiwiaW5kZXgiLCJhZGRUb2RvIiwidG9kbyIsImNvcnJlY3QiLCJsaXN0IiwicHVzaCIsInRvZG9JbmRleCIsImRlZmF1bHRQcm9qZWN0IiwibmFtZSIsInByb2oiLCJjb25zb2xlIiwibG9nIiwidG9kbzEiLCJ0b2RvMiIsInRvZG8zIiwidG9kbzQiLCJ0b2RvNSIsInNwbGljZSIsImZvckVhY2giLCJ0aGluZyIsInJlbW92ZVRvZG8iXSwic291cmNlUm9vdCI6IiJ9