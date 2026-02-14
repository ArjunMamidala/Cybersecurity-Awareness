import os
from dotenv import load_dotenv
from postmarker.core import PostmarkClient

# Load .env file
load_dotenv()

server_token = os.getenv("POSTMARK_API_KEY")

postmark = PostmarkClient(server_token=server_token)

postmark.emails.send(
    From='pkengso@ncsu.edu',
    To='fhbhatti@ncsu.edu',
    Subject='Postmark test',
    HtmlBody='HTML body goes here'
)
