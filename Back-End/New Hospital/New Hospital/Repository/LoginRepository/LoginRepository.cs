using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using New_Hospital.Data;
using New_Hospital.Interfaces.ILogin;
using New_Hospital.Model.Doctor;

namespace New_Hospital.Repository.LoginRepository
{
    public class LoginRepository : ILogin
    {
        private readonly DataContext dataContext;

        public LoginRepository(DataContext _dataContext) 
        {
            dataContext = _dataContext;
        }

        private bool CheckPassword(string userPassword, string password)
        {
            if (userPassword == password)
                return true;

            return false;
        }

        public async Task<DoctorLoginModel> LoginUser(string username, string password)
        {
            var user = await dataContext.DoctorLogin.FirstOrDefaultAsync(n => n.Email == username);

            if (user == null)
            {
                return null;
            }

            if (CheckPassword(user.Password, password))
            {
                return user;
            }
            else
            {
                return null;
            }
        }
    }
}
