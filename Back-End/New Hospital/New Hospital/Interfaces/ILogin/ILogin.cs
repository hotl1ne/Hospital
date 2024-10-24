using Microsoft.AspNetCore.Mvc;
using New_Hospital.Model.Doctor;

namespace New_Hospital.Interfaces.ILogin
{
    public interface ILogin
    {
        public Task<DoctorLoginModel> LoginUser (string username, string password);
    }
}
