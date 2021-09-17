namespace API.DTOs
{

    //this DTO object will be return back to user on successfull login
    public class UserDto
    {
        public string DisplayName { get; set; }
        public string Token { get; set; }
        public string UserName { get; set; }
        public string Image { get; set; }
    }
}