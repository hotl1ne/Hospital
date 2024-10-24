using Microsoft.IdentityModel.Tokens;
using New_Hospital.Configurations.JwtSettings;
using New_Hospital.Model.Doctor;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace New_Hospital.Services.Jwt
{
    public class JwtService
    {

        private readonly JwtSetting _jwtSettings;

        public JwtService(IConfiguration configuration)
        {
            _jwtSettings = configuration.GetSection("JwtSettings").Get<JwtSetting>();
        }

        public string GenerateToken(DoctorLoginModel user)
        {
            var claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email),
        };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Secret));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(_jwtSettings.Lifetime),
                SigningCredentials = credentials,
                Issuer = _jwtSettings.Issuer,
                Audience = _jwtSettings.Audience
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(securityToken);
        }

    }
}
