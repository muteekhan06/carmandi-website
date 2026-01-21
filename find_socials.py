import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse

BASE_URL = "https://carmandi.pk"

def find_social_links():
    print(f"[*] Fetching {BASE_URL} for social links...")
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        response = requests.get(BASE_URL, headers=headers, timeout=10)
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        social_domains = ['facebook.com', 'instagram.com', 'linkedin.com', 'twitter.com', 'youtube.com']
        found_links = {}

        links = soup.find_all('a', href=True)
        for link in links:
            href = link['href']
            for domain in social_domains:
                if domain in href:
                    if domain not in found_links:
                         found_links[domain] = href
                         print(f"[+] Found {domain}: {href}")
        
        return found_links

    except Exception as e:
        print(f"[-] Error: {e}")
        return {}

if __name__ == "__main__":
    find_social_links()
