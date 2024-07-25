const asyncHandler = (requestHandler_Function) => {
    return (req, res, next) => {
       Promise.resolve(requestHandler_Function(req, res, next)).catch((err) => {
         next(err);
       });
     };
     
   };
   export { asyncHandler };