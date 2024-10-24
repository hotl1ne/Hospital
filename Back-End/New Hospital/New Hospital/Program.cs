
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using New_Hospital.Configurations.JwtSettings;
using New_Hospital.Data;
using New_Hospital.Interfaces.ILogin;
using New_Hospital.Repository.LoginRepository;
using New_Hospital.Services.Jwt;
using System.Text;
using System.Text.Json.Serialization;

namespace New_Hospital
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddScoped<JwtService>();
            builder.Services.AddScoped<LoginRepository>();
            builder.Services.AddScoped<ILogin, LoginRepository>();
            builder.Services.AddDbContext<DataContext>(
               options =>
               {
                   options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection"));
               });
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
             .AddJwtBearer(options =>
             {
                 options.TokenValidationParameters = new TokenValidationParameters
                 {
                     ValidateIssuer = true,
                     ValidateAudience = true,
                     ValidateLifetime = true,
                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JwtSettings:Secret"])),
                     ValidIssuer = builder.Configuration["JwtSettings:Issuer"],
                     ValidAudience = builder.Configuration["JwtSettings:Audience"],

                 };
             });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.MapControllers();

            app.Run();
        }
    }
}
