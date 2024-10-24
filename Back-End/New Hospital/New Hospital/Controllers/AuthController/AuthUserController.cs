using Microsoft.AspNetCore.Mvc;
using New_Hospital.Model.Dto;
using New_Hospital.Repository.LoginRepository;
using New_Hospital.Services.Jwt;

namespace New_Hospital.Controllers.AuthController
{
    [Route("api/auth")]
    [ApiController]
    public class AuthUserController : Controller
    {
        private readonly LoginRepository _loginRepository;
        private readonly JwtService _jwtService;

        public AuthUserController(LoginRepository loginRepository, JwtService jwtService)
        {
            _loginRepository = loginRepository;
            _jwtService = jwtService;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginBody)
        {
            var result = await _loginRepository.LoginUser(loginBody.Email, loginBody.Password);

            if(result == null)
            {
                return NotFound("User was not found");
            }

            var token = _jwtService.GenerateToken(result);

            return Ok(new {token = token, result});
        }
    }
}
