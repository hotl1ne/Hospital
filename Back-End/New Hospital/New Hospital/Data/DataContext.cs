using Microsoft.EntityFrameworkCore;
using New_Hospital.Model.Doctor;

namespace New_Hospital.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<DoctorLoginModel> DoctorLogin { get; set; }
    }
}
