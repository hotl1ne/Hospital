using System.ComponentModel.DataAnnotations;

namespace New_Hospital.Model.Doctor
{
    public class DoctorLoginModel
    {
        [Key]
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
