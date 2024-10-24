namespace New_Hospital.Configurations.JwtSettings
{
    public class JwtSetting
    {
        public string Secret { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public int Lifetime { get; set; } // in minutes
    }
}
