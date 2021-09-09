namespace Application.Core
{
    public class Result<T>
    {
        public bool IsSuccess { get; set; }

        public T Value { get; set; }

        public string Error { get; set; }

        //Error Handilig 05
        //Success Method =if found object with provided id e.g: activity then will return 
        //Result obj of type Activity with IsSuccess= true and Value=value(matched Activity)  
        public static Result<T> Success(T value) => new Result<T> { IsSuccess = true, Value = value };

        //Failure Method =Failure response gives us a option to do some logic based on weather or not
        //something has gone wrong inside the handler itself.  
        public static Result<T> Failure(string error) => new Result<T> { IsSuccess = false, Error = error };

    }
}